import React from "react";
import classes from "./SideBar.module.css";
import LogoText from "../../Assets/Logo/LogoText.svg";
import Logo from "../../Assets/Logo/Logo.svg";
import comingSoon from "../../Assets/Icons/calendar.svg";
import watchlist from "../../Assets/Icons/video-play.svg";
import browse from "../../Assets/Icons/discover.svg";
import friends from "../../Assets/Icons/profile-2user.svg";
import parties from "../../Assets/Icons/people.svg";
import settings from "../../Assets/Icons/setting.svg";
import LogOut from "../../Assets/Icons/logout.svg";

const SideBar = () => {
  return (
    <aside class={classes.container__sidebar}>
      <div className={classes.aside_container}>
        <div className={classes.logo_div}>
          <a href="/home">
            <img src={Logo} alt="logo"></img>
            <img
              src={LogoText}
              alt="logo text"
              className={classes.small_screen}
            ></img>
          </a>
        </div>
        <div className={classes.sidebar_links}>
          <div className={classes.sidebar_section}>
            <p className={classes.small_screen}>Menu</p>
            <ul>
              <li>
                <a href="/home" className={classes.active}>
                  <img src={browse} alt="logo text"></img>
                  <span className={classes.small_screen}>Browse</span>
                </a>
              </li>
              <li>
                <a className={classes.small_screen} href="/home">
                  <img src={watchlist} alt="logo text"></img>
                  <span className={classes.small_screen}></span>
                  Watchlist
                </a>
              </li>
              <li>
                <a href="/home">
                  <img src={comingSoon} alt="logo text"></img>
                  <span className={classes.small_screen}>Coming soon</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.sidebar_section}>
            <p className={classes.small_screen}>Social</p>
            <ul>
              <li>
                <a href="/home">
                  <img src={friends} alt="logo text"></img>
                  <span className={classes.small_screen}>Friends</span>
                </a>
              </li>
              <li>
                <a href="/home">
                  <img src={parties} alt="logo text"></img>
                  <span className={classes.small_screen}>Parties</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.sidebar_section}>
            <p className={classes.small_screen}>Options</p>
            <ul>
              <li>
                <a href="/home">
                  <img src={settings} alt="logo text"></img>
                  <span className={classes.small_screen}>Settings</span>
                </a>
              </li>
              <li>
                <a href="/home">
                  <img src={LogOut} alt="logo text"></img>
                  <span className={classes.small_screen}>Log out</span>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
