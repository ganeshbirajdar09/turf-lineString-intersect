import { sign } from "jsonwebtoken";
import { AUTH_RESPONSES } from "./auth.responses";
import { ICredentials } from "./auth.types";
import userService from "../user/user.service";
import { privateKeyGenerator } from "../../utilities/keys.generate";

const login = async (credential: ICredentials) => {
    const { ACCESS_TOKEN_EXPIRATION_TIME } = process.env

     // Fetch the user from the database(mock database) using the provided email
    const user = await userService.findOne({ email: credential.email });
    if (!user) throw AUTH_RESPONSES.INVALID_CREDENTIALS;

    // Compare the provided password with the stored hashed password using bcrypt
    const isPasswordValid = await comparePassword(credential.password, user.password)
    if (!isPasswordValid) throw AUTH_RESPONSES.INVALID_CREDENTIALS;

    // Generate a private key for signing the JWT
    const privateKey = privateKeyGenerator();

     // Create the JWT token with user ID and role, using the private key and expiration time
    const accessToken = sign({ id: user.id, role: user.role }, privateKey, { algorithm: "RS256", expiresIn: ACCESS_TOKEN_EXPIRATION_TIME })

    const { id, role } = user;
    return {
        accessToken,
        user: { id, role }
    }
}

const comparePassword = (credential: string, password: string) => credential == password

export default { login }