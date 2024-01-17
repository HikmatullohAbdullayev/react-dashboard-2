import "./box.css"
import React from 'react';

function Box(props) {
    return (
        <div className="box">
            <div className="box_1">
                <div className="box_info">
                    <div className="box_text">
                        <h1 className="box_title">qwerty</h1>
                        <p className="box_date">qwertyuiop</p>
                    </div>
                    <div className="box_day">
                        <p className="today">Today</p>
                        <p className="yestrday">Yestrday</p>
                    </div>
                </div>
            </div>
            <ul className="list">
                <li className="list_item item">
                    <h2 className="item_title">qqwerty</h2>
                    <p className="item_number"> 12345</p>
                </li>
                <li classNam iteme="list_item">
                    <h2 className="item_title">qqwerty</h2>
                    <p className="item_number"> 12345</p>
                </li>
                <li classNam iteme="list_item">
                    <h2 className="item_title">qqwerty</h2>
                    <p className="item_number"> 12345</p>
                </li>
                <li classNam iteme="list_item">
                    <h2 className="item_title">qqwerty</h2>
                    <p className="item_number"> 12345</p>
                </li>
                <li classNam iteme="list_item">
                    <h2 className="item_title">qqwerty</h2>
                    <p className="item_number"> 12345</p>
                </li>
            </ul>
        </div>
    );
}

export default Box;