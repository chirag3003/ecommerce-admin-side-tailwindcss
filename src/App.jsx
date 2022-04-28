import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "@helpers/Auth/AuthContext";
import Routes from "@routes/index";

function App() {
    let a = "";
    return (
        <div className="App">
            <AuthContext>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </AuthContext>
        </div>
    );
}

export default App;
