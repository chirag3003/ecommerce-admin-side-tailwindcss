import BasicLayout from './components/Layouts/Basic';
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes"


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <BasicLayout>
                    <Routes>
                        {routes.map((route, index) => {
                            return <Route key={index} path={route.route} element={<route.component  {...route.props} />} />
                        })}
                    </Routes>
                </BasicLayout>
            </BrowserRouter>
        </div>
    )
}

export default App
