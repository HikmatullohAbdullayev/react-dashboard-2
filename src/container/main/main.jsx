import "./main.css"
import Box from "../box/box";
import Card from "../card/card";
import Tasks from "../tasks/tasks"
import Tickets from "../tickets/tickets"





import React from 'react';

function Main(props) {
    return (
        <div className="main_box">
           <div className="card_flex">
           <Card/>
            <Box/>
           </div>
            <div className="task_box">
                <Tickets/>
                <Tasks/>
                </div>            
        </div>
    );
}

export default Main;