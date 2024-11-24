"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const user_1 = __importDefault(require("./routes/user"));
const symbol_1 = __importDefault(require("./routes/symbol"));
const orderbook_1 = __importDefault(require("./routes/orderbook"));
const balances_1 = __importDefault(require("./routes/balances"));
const reset_1 = __importDefault(require("./routes/reset"));
app.use(express_1.default.json());
app.use("/user", user_1.default);
app.use("/symbol", symbol_1.default);
app.use("/orderbook", orderbook_1.default);
app.use("/balances", balances_1.default);
app.use("/reset", reset_1.default);
app.listen(8000, () => console.log('server started'));
