import "./header.css"
import AvatarImg from '../../assets/img/avatar.png'
import SearchIcon from "../../assets/icon/searchIcon";
import NotificationIcon from "../../assets/icon/notificationIcon";
import React from 'react';

function Header(props) {
    return (
   <>
    <header className='header container'>
                    <h1 className='Title'>Tickets</h1>
                    <div className="header__box box_h">
                        <div className="box__icons">
                            <button className='header__icon'><SearchIcon/> </button>
                            <button className='header__icon'><NotificationIcon/> </button>
                        </div>
                        <div className="avatar__box">
                            <a className='avatar_link' href="#">
                            <h2 className='avatar_name'>Jones Ferdinand</h2>
                            <img className='avatar_img' src={AvatarImg} alt="avatar_img" />
                            </a>
                        </div>
                    </div>
                </header>
   </>
    );
}

export default Header;