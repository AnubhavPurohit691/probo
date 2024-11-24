"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("../data");
const router = express_1.default.Router();
router.post("/create/:stockSymbol", (req, res) => {
    const { symbol } = req.params;
    const { userId } = req.body;
    if (data_1.Stock_balances[userId]) {
        return res.send('already exist');
    }
    data_1.Stock_balances[userId] = {
        [symbol]: {
            yes: {
                quantity: 1,
                locked: 0
            }
        }
    };
    return res.json(data_1.Stock_balances);
});
exports.default = router;
