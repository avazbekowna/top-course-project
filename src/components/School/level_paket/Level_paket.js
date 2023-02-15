import React from 'react';
import {NavLink} from "react-router-dom";

const LevelPaket = () => {
    return (
        <>
            <div className="level_paket_school" id="level_paket_school">
                <div className="container">
                    <div className="level_paket_content">
                        <div className="level_paket_top">
                            <h1>Уровень пакетов</h1>
                            <p>Списания будут автоматическими. Вы всегда можете отменить подписку в <br/>
                                Вашем личном кабинете и больше списаний не будет</p>
                        </div>
                        <div className="content_level_year">
                            <div className="year_level-left">
                                <div className="blog_year_list-left">
                                    <div className="year_top-left">
                                        <span>Месяц +</span>
                                        <p>Доступны: Все статьи</p>
                                    </div>
                                    <div className="year_price-left">
                                        <h1>585,00 $</h1>
                                        <p>Ежемесячно</p>
                                    </div>
                                    <div className="button_year-left">
                                        <div className="button_follow">
                                            <button className="button_follow_year">Оформить Подписку</button>
                                        </div>
                                        <div className="button_level">
                                            <NavLink to={"/Subscribe_package"} className="button_level_year">Подробнее</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="year_level">
                                <div className="blog_year_list">
                                    <div className="year_top">
                                        <span>Год +</span>
                                        <p>Доступны: Все Мастер классы и статьи и курсы</p>
                                    </div>
                                    <div className="year_price">
                                        <h1>585,00 $</h1>
                                        <p>Ежегодно</p>
                                    </div>
                                    <div className="button_year">
                                        <div className="button_follow">
                                            <button className="button_follow_year">Оформить Подписку</button>
                                        </div>
                                        <div className="button_level">
                                            <NavLink to={"/Course"} className="button_level_year">Подробнее</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="year_level">
                                <div className="blog_year_list">
                                    <div className="year_top">
                                        <span>Год</span>
                                        <p>Доступны: Все Мастер классы и статьи и курсы</p>
                                    </div>
                                    <div className="year_price">
                                        <h1>220,00 $</h1>
                                        <p>Ежегодно</p>
                                    </div>
                                    <div className="button_year">
                                        <div className="button_follow">
                                            <button className="button_follow_year">Оформить Подписку</button>
                                        </div>
                                        <div className="button_level">
                                            <NavLink to={"/Course"} className="button_level_year">Подробнее</NavLink>
                                        </div>
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

export default LevelPaket;
