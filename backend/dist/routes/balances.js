"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const router = express_1.default.Router();
router.get("/inr", (req, res) => {
    res.json(data_1.INR_balances);
});
router.get("/inr/:userId", (req, res) => {
    const { userId } = req.params;
    const userbalance = data_1.INR_balances[userId].balance;
    res.json({ balance: userbalance });
});
router.get("/stock", (req, res) => {
    res.json(data_1.Stock_balances);
});
router.get("/stock/:userId", (req, res) => {
    const { userId } = req.params;
    const userstockbalance = data_1.Stock_balances[userId];
    res.json({ userstockbalance: userstockbalance });
});
exports.default = router;
