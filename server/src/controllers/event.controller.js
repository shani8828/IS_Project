const Event = require("../models/Event.js");
const { validateEvent } = require("../utils/validateEvent.js");
const { getIO } = require("../sockets/socket.js");

const ingestEvent = async (req, res) => {
  try {
    const data = req.body;

    if (!validateEvent(data)) {
      return res.status(400).json({ message: "Invalid event" });
    }

    const newEvent = await Event.create({
      ...data,
      timestamp: new Date(),
    });

    const io = getIO();
    io.emit("new_event", newEvent);

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Exporting the function
exports.ingestEvent = ingestEvent;