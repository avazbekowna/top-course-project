import React from 'react';
import {BsChevronDown} from "react-icons/bs";

const Faq = () => {
    return (
        <>
            <div id="home-accordion">
                <div className="container">
                    <div className="home-accordion">
                        <div className="home-accordion_desc">
                            <div className="home-info">
                                <p>FAQ</p>
                                <h1>Остались вопросы?</h1>
                            </div>
                            <div className="home-accordion_desc-accordion">
                                <input type="checkbox" id="accordion1"/>
                                <label htmlFor="accordion1" className="home-accordion_desc-accordion_label">
                                    <p>Как мне начать обучение ?</p>
                                    <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                </label>
                                <div className="home-accordion_desc-accordion_content">
                                    <div>
                                        <p>
                                            Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="home-accordion_desc-accordion">
                                <input type="checkbox" id="accordion2"/>
                                <label htmlFor="accordion2" className="home-accordion_desc-accordion_label">
                                    <p>Могу ли я отказаться от автопродления подписки</p>
                                    <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                </label>
                                <div className="home-accordion_desc-accordion_content">
                                    <div>
                                        <p>
                                            Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="home-accordion_desc-accordion">
                                <input type="checkbox" id="accordion3"/>
                                <label htmlFor="accordion3" className="home-accordion_desc-accordion_label">
                                    <p>Могу ли я вернуть деньги</p>
                                    <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                </label>
                                <div className="home-accordion_desc-accordion_content">
                                    <div>
                                        <p>
                                            Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Faq;