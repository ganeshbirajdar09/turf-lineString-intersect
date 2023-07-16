"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const express_validator_1 = require("express-validator");
//express-validator middleware to validate the format of the incoming requests
const validate = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty())
        return next({ statusCode: 400, errors: errors.array() });
    next();
};
exports.validate = validate;
