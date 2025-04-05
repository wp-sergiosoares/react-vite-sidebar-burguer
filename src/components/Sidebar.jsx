import React, { useState } from 'react'

import Icon from "../Images/Icon.svg";
import Profile from "../Images/profile.png";
import Dashboard from "../Images/dashboard.svg";
import Transactions from "../Images/transactions.svg";
import Performance from "../Images/performance.svg";
import News from "../Images/news.svg";
import Settings from "../Images/settings.svg";
import Support from "../Images/support.svg";
import { useLocation } from 'react-router-dom';


const sidebar = () => {

  const location = useLocation();

  const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  }

  return (
    <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
      <div className={closeMenu === false ? "logoContainer" : "logoContainer active"}>
        <img src={Icon} alt="Icon" className="logo" />
        <h2 className="title">evergreen</h2>
      </div>

      <div className={closeMenu === false ? "burgerContainer" : "burgerContainer active"}>
        <div className="burgerTrigger" onClick={()=>{handleCloseMenu()}}></div>
        <div className="burgerMenu"></div>
      </div>

      <div className={closeMenu === false ? "profileContainer" : "profileContainer active"}>
        <img src={Profile} alt="profile" className="profile" />
        <div className="profileContent">
          <p className="name">Hello, Jonh</p>
          <p>email@gmail.com</p>
        </div>
      </div>

      <div className={closeMenu === false ? "contentsContainer" : "contentsContainer active"}>
        <ul>
          <li className={location.pathname === "/" ? "active" : ""}><img src={Dashboard} alt="Dashboard" /><a href="/">Dashboard</a></li>
          <li className={location.pathname === "/transactions" ? "active" : ""}><img src={Transactions} alt="Transactions" /><a href="/transactions">Transactions</a></li>
          <li className={location.pathname === "/performance" ? "active" : ""}><img src={Performance} alt="Performance" /><a href="/performance">Performance</a></li>
          <li className={location.pathname === "/news" ? "active" : ""}><img src={News} alt="News" /><a href="/news">News</a></li>
          <li className={location.pathname === "/settings" ? "active" : ""}><img src={Settings} alt="Settings" /><a href="/settings">Settings</a></li>
          <li className={location.pathname === "/support" ? "active" : ""}><img src={Support} alt="Support" /><a href="/support">Support</a></li>
        </ul>
      </div>
    </div>
  );
}

export default sidebar