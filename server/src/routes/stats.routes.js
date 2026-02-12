const express = require("express");
const router = express.Router();
const LiveStats = require("../models/liveStats.model");

router.get("/live", async (req, res) => {
  let stats = await LiveStats.findOne();

  if (!stats) {
    stats = await LiveStats.create({
      totalKnown: 0,
      totalUnknown: 0,
    });
  }

  res.json(stats);
});

module.exports = router;