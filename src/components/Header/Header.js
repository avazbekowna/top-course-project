import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Logo from '../../../../top-course/src/images/headerlogo.svg';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../../firebase"
import {toast} from "react-toastify";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    const [signUp, setSignUp] = useState(true);
    const [authData, setAuthData] = useState({email: "", password: ""});
    const onChangeFunc = (e) => {
        setAuthData({...authData, [e.target.name]: e.target.value})
    }
    const authFunc = async () => {
        if (signUp) {
            try {
                const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password);
                const user = data.user;
                if (user) {
                    window.location = "/Home";
                }
            } catch (error) {
                toast.error(error.message)
            }
        } else {        // log in
            try {
                const data = await signInWithEmailAndPassword(auth, authData.email, authData.password);
                const user = data.user;
                if (user) {
                    window.location = "/Home";
                }
            } catch (error) {
                toast.error(error.message)
            }
        }
    }


    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <div className="header-navbar">
                        <div className="header-navbar_logo">
                            <NavLink to={"/Home"}><img src={Logo} alt=""/></NavLink>
                        </div>
                        <nav className="header-navbar_nav">
                            <NavLink className="header-navbar_nav-item" to={"/School"}>О школе</NavLink>
                            <NavLink className="header-navbar_nav-item" to={"/Courses"}>Наши курсы</NavLink>
                            <NavLink className="header-navbar_nav-item" to={"/About"}>О нас</NavLink>
                        </nav>
                    </div>
                    <div className="header-buttons">
                        <NavLink onClick={handleOpen} className="header-buttons_first">Войти</NavLink>

                        {isOpen && (<div id="sign-in">
                            <div className="sign-in">
                                <div className="sign-in_bg">
                                    <NavLink to={"/Home"} onClick={handleClose}><img src={Logo} alt=""/></NavLink></div>
                                <form className="sign-in_form">
                                    <fieldset>
                                        <legend>E mail*</legend>
                                        <input type="email" name="email" value={authData.email} onChange={onChangeFunc}
                                               required/>
                                    </fieldset>
                                    <fieldset>
                                        <legend>Пароль*</legend>
                                        <input type="password" name="password" value={authData.password}
                                               onChange={onChangeFunc} required/>
                                    </fieldset>
                                    <div className="sign-in_form-buttons">
                                        <NavLink onClick={authFunc}
                                                 className="sign-in_form-buttons_first">{signUp ? "Регистрация" : "Войти"}</NavLink>
                                        <NavLink className="sign-in_form-buttons_second">Забыли пароль?</NavLink>
                                    </div>
                                    <p onClick={() => setSignUp(!signUp)}
                                       className="sign-in_form-register">{signUp ? "У вас есть аккаунт?" : "У вас нет аккаунта?"}</p>
                                </form>
                            </div>
                        </div>)}

                        <NavLink className="header-buttons_second" to={"/Follow"}>Подписаться </NavLink>
                    </div>
                    <div className="burger">
                        <input type="checkbox" id="menu-toggle" className="burger-input"/>
                        <label htmlFor="menu-toggle" className="burger-label"></label>
                        <ul className="burger-menu">
                            <li>
                                <NavLink className="nav-header" to={"/School"}>О школе</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-header" to={"/Courses"}>Наши курсы</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-header" to={"/About"}>О нас</NavLink>
                            </li>
                            <li className="burger-menu_group">
                                <NavLink onClick={handleOpen} className="nav-right">Войти</NavLink>
                                {isOpen && (<div id="sign-in">
                                        <div className="sign-in">
                                            <div className="sign-in_bg">
                                                <img src={Logo} alt=""/></div>
                                            <form className="sign-in_form">
                                                <fieldset>
                                                    <legend>E mail*</legend>
                                                    <input type="email" name="email" required/>
                                                </fieldset>
                                                <fieldset>
                                                    <legend>Пароль*</legend>
                                                    <input type="password" name="email" required/>
                                                </fieldset>
                                                <div className="sign-in_form-buttons">
                                                    <NavLink onClick={handleClose}
                                                             className="sign-in_form-buttons_first">Войти</NavLink>

                                                    {isOpen && (<div id="sign-in">
                                                        <div className="sign-in">
                                                            <div className="sign-in_bg">
                                                                <NavLink to={"/Home"} onClick={handleClose}><img src={Logo} alt=""/></NavLink></div>
                                                            <form className="sign-in_form">
                                                                <fieldset>
                                                                    <legend>E mail*</legend>
                                                                    <input type="email" name="email" value={authData.email} onChange={onChangeFunc}
                                                                           required/>
                                                                </fieldset>
                                                                <fieldset>
                                                                    <legend>Пароль*</legend>
                                                                    <input type="password" name="password" value={authData.password}
                                                                           onChange={onChangeFunc} required/>
                                                                </fieldset>
                                                                <div className="sign-in_form-buttons">
                                                                    <NavLink onClick={authFunc}
                                                                             className="sign-in_form-buttons_first">{signUp ? "Регистрация" : "Войти"}</NavLink>
                                                                    <NavLink className="sign-in_form-buttons_second">Забыли пароль?</NavLink>
                                                                </div>
                                                                <p onClick={() => setSignUp(!signUp)}
                                                                   className="sign-in_form-register">{signUp ? "У вас есть аккаунт?" : "У вас нет аккаунта?"}</p>
                                                            </form>
                                                        </div>
                                                    </div>)}
                                                    <NavLink className="sign-in_form-buttons_second">Забыли
                                                        пароль?</NavLink>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}
                                <NavLink to={"/Follow"} className="button-header">Подписаться</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;