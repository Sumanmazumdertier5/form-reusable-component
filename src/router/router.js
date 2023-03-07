import React from "react"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Form from "../form/form";
import Notification from "../notification/notification";


const Router = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route element={<Form />} path="/" />
                    <Route element={<Notification />} path="/notification" />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}
export default Router