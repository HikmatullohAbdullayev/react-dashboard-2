import "./tasks.css"
import React from 'react';

function Tasks(props) {
    return (
        <div className="tasks">
            <div className="tasks_top">
                <div className="tasks_info">
                    <h2 className="tasks_title">Unresolved tickets</h2>
                    <p className="tasks_sub_title">Group: Support  </p>
                </div>
                <a className="tasks_detalis" href="#">View detalis</a>
            </div>
            <ul className="tasks_list">
                <li className="tasks_item">
                    <h3 className="tasks_name">Waiting on Feature Request</h3>
                    <p className="tasks_number">4238</p>
                </li>
                <li className="tasks_item">
                    <h3 className="tasks_name">Awaiting Customer Response</h3>
                    <p className="tasks_number">1005</p>
                </li>
                <li className="tasks_item">
                    <h3 className="tasks_name">Awaiting Developer Fix</h3>
                    <p className="tasks_number">914</p>
                </li>
                <li className="tasks_item none">
                    <h3 className="tasks_name">Pending</h3>
                    <p className="tasks_number ">281</p>
                </li>
            </ul>

        </div>
    );
}

export default Tasks;