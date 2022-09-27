import {USERS} from "../../../fake-data/users.data";

export function validateCredentials(credentials) {
    const user = USERS.find(user => credentials?.username === user.name);
    return (user && (credentials.password === user.password)) ? user : null;
}