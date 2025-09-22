const { model } = require("mongoose");
const { PositionSchema } = require('../schemas/PositionSchema');

const PositionsModel = model("position", PositionSchema); // ✅ typo fixed + no "new"

module.exports = { PositionsModel };
