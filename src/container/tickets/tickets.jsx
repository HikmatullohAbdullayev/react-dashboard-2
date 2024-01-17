import "./tickets.css"
import React from 'react';

function Tickets(props) {
    return (
        <div className="tickets"> 
             <div className="tasks_top">
                <div className="tasks_info">
                    <h2 className="tasks_title">Tasks</h2>
                    <p className="tasks_sub_title">Today </p>
                </div>
                <a className="tasks_detalis" href="#">View detalis</a>
            </div>

            <div className="ticket_create">
                <ul className="ticket_list">
                    <li className="ticket_item">
                        <p className="ticket_new">Create new task</p>
                        <button className="ticket_button">+</button>
                    </li>
                    <li className="ticket_item">
                        <div className="inputs">
                        <input className="ticket_radio" type="radio" name="radio" />
                        <h3 className="ticket_name">Finish ticket update</h3>
                        </div>
                        <p className="ticket_status urgent ">Urgent</p>
                    </li>
                    <li className="ticket_item">
                        <div className="inputs">
                        <input className="ticket_radio" type="radio"  name="radio"/>
                        <h3 className="ticket_name">Create new ticket example</h3>
                        </div>
                        <p className="ticket_status new">New</p>
                    </li>
                    <li className="ticket_item none">
                        <div className="inputs">
                        <input className="ticket_radio" type="radio" name="radio" />
                        <h3 className="ticket_name">Update ticket report</h3>
                        </div>
                        <p className="ticket_status default">Default</p>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}

export default Tickets;