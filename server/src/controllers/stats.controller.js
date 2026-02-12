const getLiveStats = (req, res) => {
  res.json({
    total: 100,
    known: 40,
    unknown: 60,
  });
};
exports.getLiveStats = getLiveStats;