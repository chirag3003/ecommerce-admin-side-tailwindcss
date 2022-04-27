import React from "react";
import BasicLayout from "./components/Layouts/Basic";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import AuthContext from "@helpers/Auth/AuthContext";

function App() {
    let a = "";
    return (
        <div className="App">
            <AuthContext>
                <BrowserRouter>
                    <BasicLayout>
                        <Routes>
                            {routes.map((route, index) => {
                                return (
                                    <Route
                                        key={index}
                                        path={route.route}
                                        element={
                                            <route.component {...route.props} />
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </BasicLayout>
                </BrowserRouter>
            </AuthContext>
        </div>
    );
}

export default App;
