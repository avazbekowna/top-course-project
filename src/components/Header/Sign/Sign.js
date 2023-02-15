

import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai";

const Sign = () => {

    const [isOpen, setIsOpen] = useState(false);const handleOpen = () => {
        setIsOpen(true);};
    const handleClose = () => {setIsOpen(false);
    };
    return (
        <>


            {isOpen && (    <div className="modal-block">
                <div className="modal-block_block">            <h1 className="modal-block_block-title">Благодарим за покупку!!!</h1>
                    <p>Теперь вам доступен  курс “Frontend разработчик”</p>            <NavLink className="modal-block_block-link" to={"/Buyed-courses"}>Ок, посмотреть покупку  </NavLink>
                    <AiOutlineClose className="modal-block_block-close" onClick={handleClose}/>        </div>
            </div>)}

            <div id="sign">
                <div className="container">
                    <div className="sign">
                        <form id="sign-form">
                            <fieldset>
                                <legend className="sign-email">E mail*</legend>
                                <input type="email"/>
                            </fieldset>

                            <fieldset>
                                <legend className="sign-password">Пароль*</legend>
                                <input type="password"/>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Sign;