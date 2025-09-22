const { model } = require("mongoose");
const { OrdersSchema } = require('../schemas/OrderSchema');

const OrdersModel = model("order", OrdersSchema); // ✅ no "new"

module.exports = { OrdersModel };
