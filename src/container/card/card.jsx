import "./card.css"
import React from 'react';

function Card(props) {
    return (
        <div className="cards">
            <div className="card">
                <h2 className="card_title">Unresolved</h2>
                <p className="card_number">60</p>
            </div>
            <div className="card">
                <h2 className="card_title">Overdue</h2>
                <p className="card_number">16</p>
            </div>
            <div className="card">
                <h2 className="card_title">Open</h2>
                <p className="card_number">43</p>
            </div>
            <div className="card">
                <h2 className="card_title">On hold</h2>
                <p className="card_number">64</p>
            </div>
        </div>
    );
}

export default Card;