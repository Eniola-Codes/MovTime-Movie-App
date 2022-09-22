import React from "react";
import classes from "../../styles/SideBar.module.css";
import LogoText from "../../Assets/Logo/LogoText.svg";
import Logo from "../../Assets/Logo/Logo.svg";
import comingSoon from "../../Assets/Icons/calendar.svg";
import watchlist from "../../Assets/Icons/video-play.svg";
import browse from "../../Assets/Icons/discover.svg";
import friends from "../../Assets/Icons/profile-2user.svg";
import parties from "../../Assets/Icons/people.svg";
import settings from "../../Assets/Icons/setting.svg";
import LogOut from "../../Assets/Icons/logout.svg";
import notify from "../../Assets/Icons/notification-bing.svg";
import search from "../../Assets/Icons/search-icon.svg";
import avatar1 from "../../Assets/Avatars/avataaars(1).svg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SideBar = () => {

  //Tooltip functions
  const renderTooltipBrowse = (props) => (
    <Tooltip id="button-browse" className={classes.tooltip} {...props}>
      Browse
    </Tooltip>
  );
  const renderTooltipWatch = (props) => (
    <Tooltip id="button-watchList" className={classes.tooltip} {...props}>
      Watchlist
    </Tooltip>
  );
  const renderTooltipComing = (props) => (
    <Tooltip id="button-Soon" className={classes.tooltip} {...props}>
      Coming soon
    </Tooltip>
  );
  const renderTooltipFriends = (props) => (
    <Tooltip id="button-Friends" className={classes.tooltip} {...props}>
      Friends
    </Tooltip>
  );
  const renderTooltipParties = (props) => (
    <Tooltip id="button-Parties" className={classes.tooltip} {...props}>
      Parties
    </Tooltip>
  );
  const renderTooltipSettings = (props) => (
    <Tooltip id="button-Settings" className={classes.tooltip} {...props}>
      Settings
    </Tooltip>
  );
  const renderTooltipLogout = (props) => (
    <Tooltip id="button-Log" className={classes.tooltip} {...props}>
      Log in/out
    </Tooltip>
  );
  const renderTooltipSearch = (props) => (
    <Tooltip id="button-Search" className={classes.tooltip} {...props}>
      Search
    </Tooltip>
  );
  const renderTooltipNotify = (props) => (
    <Tooltip id="button-Notify" className={classes.tooltip} {...props}>
      Notification
    </Tooltip>
  );

  return (
      //Rendering the Sidebar
    <aside className={classes.container__sidebar}>
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
            <ul className="ps-0">
              <li>
                <a href="/home" className={classes.active}>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 200 }}
                    overlay={renderTooltipBrowse}
                    text="i want you"
                  >
                    <img src={browse} alt="logo text"></img>
                  </OverlayTrigger>

                  <span className={classes.small_screen}>Browse</span>
                </a>
              </li>
              <li>
                <a className={classes.small_screen} href="/home">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 200 }}
                    overlay={renderTooltipWatch}
                  >
                    <img src={watchlist} alt="logo text"></img>
                  </OverlayTrigger>
                  <span className={classes.small_screen}></span>
                  Watchlist
                </a>
              </li>
              <li>
                <a href="/home">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 200 }}
                    overlay={renderTooltipComing}
                  >
                    <img src={comingSoon} alt="logo text"></img>
                  </OverlayTrigger>
                  <span className={classes.small_screen}>Coming soon</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.sidebar_section}>
            <p className={classes.small_screen}>Social</p>
            <ul className="ps-0">
              <li>
                <a href="/home">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 200 }}
                    overlay={renderTooltipFriends}
                  >
                    <img src={friends} alt="logo text"></img>
                  </OverlayTrigger>
                  <span className={classes.small_screen}>Friends</span>
                </a>
              </li>
              <li>
                <a href="/home">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 200 }}
                    overlay={renderTooltipParties}
                  >
                    <img src={parties} alt="logo text"></img>
                  </OverlayTrigger>
                  <span className={classes.small_screen}>Parties</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.sidebar_section}>
            <p className={classes.small_screen}>Options</p>
            <ul className="ps-0">
              <li>
                <a href="/home">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 200 }}
                    overlay={renderTooltipSettings}
                  >
                    <img src={settings} alt="logo text"></img>
                  </OverlayTrigger>
                  <span className={classes.small_screen}>Settings</span>
                </a>
              </li>
              <li className={classes.flexible_icon}>
                <a href="/home">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 200 }}
                    overlay={renderTooltipSearch}
                  >
                    <img src={search} alt="logo text"></img>
                  </OverlayTrigger>
                  <span className={classes.small_screen}>Search</span>
                </a>
              </li>
              <li className={classes.flexible_icon}>
                <a href="/home">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 200 }}
                    overlay={renderTooltipNotify}
                  >
                    <img src={notify} alt="logo text"></img>
                  </OverlayTrigger>
                  <span className={classes.small_screen}>Notification</span>
                </a>
              </li>
              <li>
                <a href="/home">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 200 }}
                    overlay={renderTooltipLogout}
                  >
                    <img src={LogOut} alt="logo text"></img>
                  </OverlayTrigger>
                  <span className={classes.small_screen}>Log out</span>
                </a>
              </li>
              <li className={`${classes.flexible_icon} ${classes.avatar_link}`}>
                <a href="/home">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 100, hide: 200 }}
                    overlay={renderTooltipLogout}
                  >
                    <img
                      src={avatar1}
                      className={classes.nav_avatar}
                      alt="logo text"
                    ></img>
                  </OverlayTrigger>
                  <span className={classes.small_screen}>Myself</span>
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
