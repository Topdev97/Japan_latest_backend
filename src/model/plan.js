const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  level: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  features: { type: [String], required: true },
});

const Plan = mongoose.model('Plan', PlanSchema);

module.exports = Plan;
