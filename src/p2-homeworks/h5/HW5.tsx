import React from "react";
import Header from "./pages/Header/Header";
import Routes from "./Routes";
import { HashRouter } from "react-router-dom";
import Footer from "./pages/Footer/Footer";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>

            <Header/>

            <Routes/>

            <Footer/>

            </HashRouter>
        </div>
    );
}

export default HW5;
