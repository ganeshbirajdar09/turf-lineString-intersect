import { body } from "express-validator";
import { validate } from "../../utilities/validate";

export const LOGIN_VALIDATOR = [
    body("email").exists().withMessage("email is required").isEmail().withMessage("email should in a valid email format"),
    body("password").exists().withMessage("password is required").isLength({ min: 3 }).withMessage("password is required"),
    validate
]
