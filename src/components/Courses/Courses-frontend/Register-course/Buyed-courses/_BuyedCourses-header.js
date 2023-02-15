import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from "../../../../../../../top-course/src/images/headerlogo.svg";
import {BiBell} from "react-icons/bi";

const _BuyedCoursesHeader = () => {
    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="header">
                        <div className="header-navbar">
                            <div className="header-navbar_logo"><NavLink to={"/Home"}><img src={Logo} alt=""/></NavLink>
                            </div>
                            <nav className="header-navbar_nav">
                                <NavLink className="header-navbar_nav-item" to={"/School"}>О школе</NavLink> <NavLink
                                className="header-navbar_nav-item" to={"/Courses"}>Наши курсы</NavLink>
                                <NavLink className="header-navbar_nav-item" to={"/About"}>О нас</NavLink></nav>
                        </div>
                        <div className="header-buttons">
                            <BiBell className="header-buttons_bell-icon"/>
                            <NavLink to={"/Profiles"} className="header-buttons_profile">Профиль</NavLink>
                        </div>
                        <div className="burger2">
                            <input type="checkbox" id="menu-toggle2" className="burger-input2"/> <label
                            htmlFor="menu-toggle2" className="burger-label2"></label>
                            <ul className="burger-menu2">
                                <li className="burger-menu2_group">
                                    <NavLink className="nav-right2"><BiBell/></NavLink>
                                    <NavLink to={"/Profiles"} className="button-header2">Профиль</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-header2" to={"/School"}>О школе</NavLink></li>
                                <li><NavLink className="nav-header2" to={"/Courses"}>Наши курсы</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-header2" to={"/About"}>О нас</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default _BuyedCoursesHeader;