"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_data_1 = require("./user.data");
const findOne = (user) => user_data_1.users.find(u => u.email == user.email);
exports.default = {
    findOne
};
