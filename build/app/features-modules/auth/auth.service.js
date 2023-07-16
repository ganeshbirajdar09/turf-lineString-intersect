"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_responses_1 = require("./auth.responses");
const user_service_1 = __importDefault(require("../user/user.service"));
const keys_generate_1 = require("../../utilities/keys.generate");
const login = (credential) => __awaiter(void 0, void 0, void 0, function* () {
    const { ACCESS_TOKEN_EXPIRATION_TIME } = process.env;
    // Fetch the user from the database(mock database) using the provided email
    const user = yield user_service_1.default.findOne({ email: credential.email });
    if (!user)
        throw auth_responses_1.AUTH_RESPONSES.INVALID_CREDENTIALS;
    // Compare the provided password with the stored hashed password using bcrypt
    const isPasswordValid = yield comparePassword(credential.password, user.password);
    if (!isPasswordValid)
        throw auth_responses_1.AUTH_RESPONSES.INVALID_CREDENTIALS;
    // Generate a private key for signing the JWT
    const privateKey = (0, keys_generate_1.privateKeyGenerator)();
    // Create the JWT token with user ID and role, using the private key and expiration time
    const accessToken = (0, jsonwebtoken_1.sign)({ id: user.id, role: user.role }, privateKey, { algorithm: "RS256", expiresIn: ACCESS_TOKEN_EXPIRATION_TIME });
    const { id, role } = user;
    return {
        accessToken,
        user: { id, role }
    };
});
const comparePassword = (credential, password) => credential == password;
exports.default = { login };
