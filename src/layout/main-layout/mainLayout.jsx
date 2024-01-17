import "./mainLayout.css"
import Header from "../header/header";
import Main from "../../container/main/main";
import Footer from "../footer/footer";
import React from 'react';

function MainLayout(props) {
    return (
        <div className="wrapper">
            <div className="wrap">
            <Header/>
            <Main/>
            </div>
            <Footer/>

        </div>
    );
}

export default MainLayout;