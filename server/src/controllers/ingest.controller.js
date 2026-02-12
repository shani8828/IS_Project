const Event = require("../models/Event");
const KnownPerson = require("../models/KnownPerson");
const UnknownPerson = require("../models/UnknownPerson");
const Counter = require("../models/Counter");
const { isDuplicate } = require("../services/state.service");

const ingestEvent = async (req, res) => {
    
    await Counter.create({ knownCount: 0, unknownCount: 0 });
  try {
    console.log("Incoming body:", req.body);

    const io = req.app.get("io");

    const {
      event_id,
      timestamp,
      camera_id,
      track_id,
      is_known,
      person_id,
      confidence,
    } = req.body;

    if (isDuplicate(track_id)) {
      return res.status(200).json({ message: "Duplicate track ignored" });
    }

    // Save raw event
    await Event.create({
      event_id,
      timestamp,
      camera_id,
      track_id,
      is_known,
      person_id,
      confidence,
    });

    const counter = await Counter.findOne();

    let isNewPerson = false;

    if (is_known) {
      const existing = await KnownPerson.findOne({ person_id });

      if (!existing) {
        isNewPerson = true;
        counter.knownCount += 1;
      }

      await KnownPerson.findOneAndUpdate(
        { person_id },
        {
          $set: { last_seen: new Date() },
          $addToSet: { cameras_seen: camera_id },
        },
        { upsert: true }
      );

    } else {
      const existing = await UnknownPerson.findOne({ temp_id: person_id });

      if (!existing) {
        isNewPerson = true;
        counter.unknownCount += 1;
      }

      await UnknownPerson.findOneAndUpdate(
        { temp_id: person_id },
        {
          $set: { last_seen: new Date() },
          $setOnInsert: { first_seen: new Date() },
          $addToSet: { cameras_seen: camera_id },
        },
        { upsert: true }
      );
    }

    if (isNewPerson) {
      await counter.save();
    }

    // Emit updated counts to frontend
    io.emit("countUpdate", {
      known: counter.knownCount,
      unknown: counter.unknownCount,
      total: counter.knownCount + counter.unknownCount,
    });

    return res.status(200).json({
      message: "Event processed successfully",
      isNewPerson,
    });

  } catch (err) {
    console.error("Ingest Error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { ingestEvent };