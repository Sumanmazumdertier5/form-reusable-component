import React, { useState } from 'react';
import SidePanel from "../router/sidePanel"
// import Router from "../router/router";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Form from "../form/form";
import Notification from "../notification/notification";
import Router from "../router/router";
import "./main.css";
const Main = () => {

    return (
        <React.Fragment>
            <div className='container'>
                <div className='dashboardLeft'>
                    <SidePanel />
                </div>
                <div className='dashboardRight'>
                    <Router />
                </div>
            </div>

        </React.Fragment>
    )
}
export default Main;