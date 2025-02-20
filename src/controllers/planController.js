// src/controllers/planController.js

const Plan = require("../model/plan");
const logger = require('../utils/logger');



module.exports = {

    fetchPlanDetails: async (req, res) => {
        try {
            console.log(req.body)
        } catch (error) {
            logger.error("Error fetching plan details:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    updatePlanDetails: async (req, res) => {
        try {
            let filter;
            let update;
            const planId = req.query.planId;
            filter = { _id: planId };
            update = {
                name: req.query.data.name,
            };
            const UpdateUserInfo = await User.findByIdAndUpdate(filter, update);
            if (UpdateUserInfo) {
                return res.status(200).json({
                    message: 'success'
                });
            }
        } catch (error) {
            logger.error("Error updating user details:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    deletePlan: async (req, res) => {
        try {
            const { planId } = req.body;
            await Plan.deleteOne(planId);
            res.status(200).json({ message: "Plan deleted successfully" });
        } catch (error) {
            logger.error("Error deleting user:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },

    createPlan: async (req, res) => {
      const { level, name, price, features } = req.body;
        let existingPlan;
        try {
            existingPlan = await Plan.findOne({ level })
            if (existingPlan) {
                return res.status(200).json({ message: "exist" })
            }
        } catch (err) {
            console.log(err);
        }
        try {
            const plan = new Plan({
                level,
                name,
                price,
                features
            });
            const newPlan = await plan.save();
            res.status(201).json(newPlan);
        }
        catch (error) {
            logger.error("Error in createPlanController:", error);
            res.status(500).json({ message: "Error creating plan", error: error.message });
        }
    },
};