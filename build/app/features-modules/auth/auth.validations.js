"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN_VALIDATOR = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utilities/validate");
exports.LOGIN_VALIDATOR = [
    (0, express_validator_1.body)("email").exists().withMessage("email is required").isEmail().withMessage("email should in a valid email format"),
    (0, express_validator_1.body)("password").exists().withMessage("password is required").isLength({ min: 3 }).withMessage("password is required"),
    validate_1.validate
];
