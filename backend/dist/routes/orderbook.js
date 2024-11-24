"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.json(data_1.Orderbooks);
});
// here may be cause some issue
router.post("/buy", (req, res) => {
    const { userId, symbol, quantity, price, stocktype } = req.body; // stock type is no
    data_1.Orderbooks[userId] = {
        [symbol]: {
            [stocktype]: {
                [price]: {
                    total: quantity
                }
            }
        }
    };
    res.json(data_1.Orderbooks);
});
exports.default = router;
