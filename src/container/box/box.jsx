import "./box.css"
import React from 'react';

function Box(props) {
    return (
        <div className="box">
                <div className="box_info">
                    <div className="box_text">
                        <h1 className="box_title">Today’s trends</h1>
                        <p className="box_date">as of 25 May 2019, 09:41 PM</p>
                    </div>
                    <div className="box_day">
                       <p className="day"> Today</p>
                       <p className="day">Yestrday</p>
                    </div>
                </div>
            <ul className="box_list">
            <li className="box_list_item">
                    <h2 className="box_item_title">Resolved</h2>
                    <p className="box_item_number"> 449</p>
                </li>
                <li className="box_list_item">
                    <h2 className="box_item_title">Resolved</h2>
                    <p className="box_item_number"> 449</p>
                </li>
                <li className="box_list_item">
                    <h2 className="box_item_title">Average first response time</h2>
                    <p className="box_item_number"> 33m</p>
                </li>
                <li className="box_list_item">
                    <h2 className="box_item_title">Average response time</h2>
                    <p className="box_item_number"> 3h 8m</p>
                </li>
                <li className="box_list_item">
                    <h2 className="box_item_title">SLA Resolution within</h2>
                    <p className="box_item_number"> 94</p>
                </li>
               
               
            </ul>
        </div>
    );
}

export default Box;