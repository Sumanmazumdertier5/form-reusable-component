import React from "react"
import { Link, Route, Routes, BrowserRouter, Router } from 'react-router-dom';
import Notification from "../notification/notification"
import Form from "../form/form";
// import Notification from "../notification/notification";
const SidePanel = () => {
    return (
        <React.Fragment>
            {/* <Router> */}
                <nav>
                    <ul>
                        <li>
                            <a href="/">Form</a>
                            {/* <Link to="/">Home</Link> */}
                        </li>
                        <li>
                            <a href="/notification">Notification</a>
                            {/* <Link to="/notification">Notification</Link> */}
                        </li>
                    </ul>
                </nav>
            {/* </Router> */}
        </React.Fragment>
    )
}
export default SidePanel