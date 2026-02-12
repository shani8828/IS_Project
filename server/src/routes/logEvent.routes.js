const express = require("express");
const { ingestEvent } = require("../controllers/event.controller.js");

const router = express.Router();

router.post("/ingest", ingestEvent);

module.exports = router;