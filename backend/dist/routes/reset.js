"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const router = express_1.default.Router();
router.delete("/", (req, res) => {
    Object.keys(data_1.Orderbooks).forEach((key) => delete data_1.Orderbooks[key]);
    Object.keys(data_1.Stock_balances).forEach((key) => delete data_1.Stock_balances[key]);
    Object.keys(data_1.INR_balances).forEach((key) => delete data_1.INR_balances[key]);
    res.json({ message: "data reset" });
});
exports.default = router;
