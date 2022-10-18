import Image from 'next/image'
import Link from 'next/link';
import classes from "../../styles/BarsStyle/SideBar.module.css";
import LogoText from "../../public/Assets/Logo/LogoText.svg";
import Logo from "../../public/Assets/Logo/Logo.svg";
import avatar1 from "../../public/Assets/Avatars/avataaars(1).svg";
import { BiMoviePlay } from "react-icons/bi";
import {
  FaCalendarAlt,
  FaUsers,
  FaSignOutAlt,
  FaCompass,
  FaBell,
} from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiSettingsFill, RiSearch2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const SideBar = () => {
  const showSideBar = useSelector(state => state.uiState.sideBar)

const sideBarOpen = showSideBar ? classes.sidebaropen : '';
  return (
    //Rendering the Sidebar
    <aside className={`${classes.container__sidebar} ${sideBarOpen}`}> 
      <div className={`${classes.aside_container} ${sideBarOpen}`}>
        <div className={classes.logo_div}>
          <a href="/home">
            <span><Image src={Logo} alt="logo"></Image></span>
            <span><Image src={LogoText} alt="logo text"></Image></span>
          </a>
        </div>

        <div>
          <div className={classes.sidebar_section}>
            <p>Menu</p>

            <ul className="ps-0">
              <li>
                <a href="/home" className={classes.active}>
                  <FaCompass />
                  <span>Browse</span>
                </a>
              </li>
              <li>
                <a href="/home">
                  <BiMoviePlay />
                  <span>
                  Watchlist</span>
                </a>
              </li>
              <li>
                <a href="/home">
                  <FaCalendarAlt />

                  <span>Coming soon</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.sidebar_section}>
            <p>Social</p>
            <ul className="ps-0">
              <li>
                <a href="/home">
                  <BsFillPeopleFill />

                  <span>Friends</span>
                </a>
              </li>
              <li>
                <a href="/home">
                  <FaUsers />

                  <span>Parties</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.sidebar_section}>
            <p>Options</p>
            <ul className="ps-0">
              <li>
                <a href="/home">
                  <RiSettingsFill />

                  <span>Settings</span>
                </a>
              </li>
              <li className={classes.flexible_options}>
                <a href="/home">
                  <RiSearch2Fill />
                  <span>Search</span>
                </a>
              </li>
              <li className={classes.flexible_options}>
                <a href="/home">
                  <FaBell /> <span>Notification</span>
                </a>
              </li>
              <li>
                <a href="/home">
                  <FaSignOutAlt />
                  <Link href='/auth/signin'><span>Sign in</span></Link>
                </a>
              </li>
              <li
                className={classes.flexible_options}
              >
                <a href="/home">
                  <Image
                    src={avatar1}
                    className={classes.nav_avatar}
                    alt="logo text"
                    width={24}
                    height={24}
                  ></Image>
                  <span>Eniola codes</span>
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
