import React from "react";
import "./sitebar-nav.css";
import Logo from "../../assets/icon/logo.svg";
import OverviewIcon from "../../assets/icon/overviewIcon.jsx";
import TicketsIcon from "../../assets/icon/ticketsIcon.jsx";
import IdeasIcon from "../../assets/icon/ideasIcon.jsx";
import ContactsIcon from "../../assets/icon/contactsIcon.jsx";
import AgentsIcon from "../../assets/icon/agentsIcon.jsx";
import ArticlesIcon from "../../assets/icon/articlesIcon.jsx";
import SettingsIcon from "../../assets/icon/settingsIcon.jsx";
import SubscriptionIcon from "../../assets/icon/subcriptionIcon.jsx";

function SidebarNav() {
  return (
    <>
      <nav className="nav page">
        <a className="logo" href="#">
          <img className="logo_img" src={Logo} alt="logo" /> Dashboard Kit
        </a>
        <ul className="nav__list list">
          <li className="list_item  overview">
            <span>
              <OverviewIcon />
            </span>
            <button className="item">Overview</button>
          </li>
          <li className="list_item  ">
            <span>
              <TicketsIcon />
            </span>
            <button className="item">Tickets</button>
          </li>
          <li className="list_item  ideas">
            <span>
              <IdeasIcon />
            </span>
            <button className="item">Ideas</button>
          </li>
          <li className="list_item  contacts">
            <span>
              <ContactsIcon />
            </span>
            <button className="item">Contacts</button>
          </li>
          <li className="list_item  agents">
            <span>
              
              <AgentsIcon />
            </span>
            <button className="item">Agents</button>
          </li>
          <li className="list_item  articles">
            <span>
              
              <ArticlesIcon />
            </span>
            <button className="item">Articles</button>
          </li>
        </ul>
        <ul className="addition">
          <li className="addition_item list_item settings">
            <span>
              
              <SettingsIcon />
            </span>
            <button className="item">Settings</button>
          </li>
          <li className="addition_item list_item subscription">
            <span>
              
              <SubscriptionIcon />
            </span>
            <button className="item">Subscription</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SidebarNav;
