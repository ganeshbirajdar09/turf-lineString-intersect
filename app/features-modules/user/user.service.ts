import { users } from "./user.data";
import { IUser } from "./user.types";

const findOne = (user: Partial<IUser>) => users.find(u => u.email == user.email);

export default {
    findOne
}