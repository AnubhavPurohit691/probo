"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usercreate = usercreate;
const data_1 = require("../data");
function usercreate(req, res) {
    const { userId } = req.params;
    console.log(userId);
    if (data_1.INR_balances[userId]) {
        return res.send("already have an account");
    }
    data_1.INR_balances[userId] = {
        balance: 0,
        locked: 0
    };
    return res.json({ INR_balances: data_1.INR_balances });
}
