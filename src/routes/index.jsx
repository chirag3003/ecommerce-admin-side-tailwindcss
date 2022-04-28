import React, { useContext } from "react";
import Auth from "@helpers/Auth";
import BasicLayout from "@/Layouts/Basic";
import { Route, Routes } from "react-router-dom";
import routeList from "./routeList";
import Login from "@/Login";

function RouteComponent() {
    const auth = useContext(Auth);
    if (!auth.jwt || auth.jwt === "") {
        return <Login />;
    }
    return (
        <BasicLayout>
            <Routes>
                {routeList.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.route}
                            element={<route.component {...route.props} />}
                        />
                    );
                })}
            </Routes>
        </BasicLayout>
    );
}

export default RouteComponent;
