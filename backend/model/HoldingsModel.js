const { model } = require("mongoose");
const { HoldingSchema } = require('../schemas/HoldingSchema');

const HoldingsModel = model("holding", HoldingSchema); // ✅ no "new"

module.exports = { HoldingsModel };
