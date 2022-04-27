import React, { useState, useEffect } from "react";
import Axios from "@helpers/Axios";
import authContext from ".";
import axios from "axios";

const getLocalJWT = () => {
    try {
        const jwt = localStorage.getItem("jwt");
        if (jwt === null) {
            return null;
        } else {
            return jwt;
        }
    } catch (err) {
        console.error(err);
        return null;
    }
};
const setLocalJwt = (jwt) => {
    let JWT = jwt;
    try {
        localStorage.setItem("jwt", JWT);
    } catch (err) {
        console.error(err);
        return null;
    }
};

function AuthContext({ children }) {
    const [jwt, setJwt] = useState(getLocalJWT());
    const [user, setUser] = useState({});

    const login = () => {};
    const logout = () => {};

    useEffect(() => {
        if (!jwt || jwt == "") {
            setUser(null);
            setLocalJwt(null);
            return;
        }
        if (jwt !== getLocalJWT()) {
            setLocalJwt(jwt);
        }

        Axios({
            method: "GET",
            url: "/user/me",
            headers: {
                Authorization: jwt,
            },
        })
            .then((res) => {
                setUser(res.data);
            })
            .catch(() => {
                setUser(null);
                setJwt(null);
            });
    }, [jwt]);

    return (
        <authContext.Provider
            value={{
                jwt,
                user,
                login,
                logout,
                Axios: axios.create({
                    baseURL: import.meta.env.VITE_API_URL,
                    headers: {
                        Authorization: jwt,
                    },
                }),
            }}
        >
            {children}
        </authContext.Provider>
    );
}

export default AuthContext;
