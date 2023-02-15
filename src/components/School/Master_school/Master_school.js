import React from 'react';
import {NavLink} from "react-router-dom";

const MasterSchool = () => {
    return (
        <>
            <div className="master" id="master">
                <div className="container">
                    <div className="content_master">
                        <h1>Мастер-классы</h1>
                        <div className="java_content">
                            <div className="java">
                                <div className="java_info">

                                   <NavLink to={"/Courses-java"}>
                                       <h3>Реактивное программирование на Java:
                                           как, зачем и стоит ли? </h3>
                                   </NavLink>

                                    <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого
                                        относительно нового подхода и почему сейчас он в тренде, рассказал на конференции РИТ++ ...</p>
                                </div>
                            </div>
                            <div className="java">
                                <div className="java_info">
                                    <NavLink to={"/Courses-java"}>
                                        <h3>Реактивное программирование на Java:
                                            как, зачем и стоит ли? </h3>
                                    </NavLink>
                                    <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого
                                        относительно нового подхода и почему сейчас он в тренде, рассказал на конференции РИТ++ ...</p>
                                </div>
                            </div>
                            <div className="java">
                                <div className="java_info">
                                    <NavLink to={"/Courses-java"}>
                                        <h3>Реактивное программирование на Java:
                                            как, зачем и стоит ли? </h3>
                                    </NavLink>
                                    <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого
                                        относительно нового подхода и почему сейчас он в тренде, рассказал на конференции РИТ++ ...</p>
                                </div>
                            </div>
                            <NavLink to={"/Master-class"} className="button-master">Все мастер классы</NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default MasterSchool;