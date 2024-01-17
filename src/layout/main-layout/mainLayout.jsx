import "./mainLayout.css"
import Header from "../header/header";
import Footer from "../footer/footer";
import React from 'react';

function MainLayout(props) {
    return (
        <div className="wrapper">
            <Header/>
            <Footer/>

        </div>
    );
}

export default MainLayout;