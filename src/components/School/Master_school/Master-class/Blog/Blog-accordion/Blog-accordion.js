
import React from 'react';
import {BsChevronDown} from "react-icons/bs";

const BlogAccordion = () => {
    return (
        <>
            <div id="com_accordion">
                <div className="container">
                    <div className="com_accordion">
                        <h1>FAQ</h1>
                        <div className="com_acc">
                            <h3>Остались вопросы?</h3>
                        </div>
                        <div className="com_accordion_desc">
                            <div className="com_accordion_desc-accordion">
                                <input type="checkbox" id="accordion1"/>
                                <label htmlFor="accordion1" className="com_accordion_desc-accordion_label">
                                    <p>Как мне начать обучение ?</p>
                                    <BsChevronDown className="com_accordion_desc-accordion_label-icon"/>
                                </label>
                                <div className="com_accordion_desc-accordion_content">
                                    <div>
                                        <p>
                                            Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="com_accordion_desc-accordion">
                                <input type="checkbox" id="accordion1"/>
                                <label htmlFor="accordion1" className="com_accordion_desc-accordion_label">
                                    <p>Могу ли я отказаться от автопродления подписки</p>
                                    <BsChevronDown className="com_accordion_desc-accordion_label-icon"/>
                                </label>
                                <div className="com_accordion_desc-accordion_content">
                                    <div>
                                        <p>
                                            Margulan.info – это уникальная экосистема и персональная социальная
                                            сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                            образовательными практиками и возможностями открытой коммуникации
                                            как с Маргуланом так и с другими участниками. Вы получаете полезный
                                            и практический контент, который вдохновляет, дает новые инструменты
                                            и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                            личной эффективности.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="com_accordion_desc-accordion">
                                <input type="checkbox" id="accordion1"/>
                                <label htmlFor="accordion1" className="com_accordion_desc-accordion_label">
                                    <p>Могу ли я вернуть деньги</p>
                                    <BsChevronDown className="com_accordion_desc-accordion_label-icon"/>
                                </label>
                                <div className="com_accordion_desc-accordion_content">
                                    <div>
                                        <p>
                                            Margulan.info – это уникальная экосистема и персональная социальная
                                            сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                            образовательными практиками и возможностями открытой коммуникации

                                            Азима Клуб, [20.01.2023 16:29]
                                            как с Маргуланом так и с другими участниками. Вы получаете полезный
                                            и практический контент, который вдохновляет, дает новые инструменты
                                            и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                            личной эффективности.
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

export default BlogAccordion;