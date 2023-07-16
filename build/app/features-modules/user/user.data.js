"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const constants_1 = require("../../utilities/constants");
//dummy user data
exports.users = [
    {
        username: "Ganesh",
        email: "ganesh@google.com",
        role: constants_1.ROLES.USER,
        password: "123",
        id: 1
    },
    {
        username: "Abhishek",
        email: "abhishek@google.com",
        role: constants_1.ROLES.ADMIN,
        password: "321",
        id: 2
    },
];
