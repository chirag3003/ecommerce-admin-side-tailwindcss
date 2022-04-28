import Axios from "@helpers/Axios";
import { createContext } from "react";

const authContext = createContext({
    jwt: null,
    user: null,
    login: () => {},
    logout: () => {},
    Axios: Axios,
});
export default authContext;
