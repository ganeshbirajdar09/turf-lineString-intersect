import { ROLES } from "../../utilities/constants";
import { IUser } from "./user.types";


//dummy user data
export const users: IUser[] = [
    {
        username: "Ganesh",
        email: "ganesh@google.com",
        role: ROLES.USER,
        password: "123",
        id: 1
    },
    {
        username: "Abhishek",
        email: "abhishek@google.com",
        role: ROLES.ADMIN,
        password: "321",
        id: 2
    },
] 