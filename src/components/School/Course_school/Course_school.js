import React from 'react';
import {NavLink} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs"

const CourseSchool = () => {
    return (
        <>
            <div id="Course_school">
                <div className="container">
                    <h1>Курсы</h1>
                    <div className="content_school">

                        <div className="course_school">
                            <h2>Frontend-разработчик</h2>
                            <div className="text_school">
                                <p>Мастер создания сайтов.
                                    Умеет делать их красивыми, интерактивными,
                                    с большим функционалом. Профессия отлично
                                    подойдет тем, кто хочет фрилансить и постоянно
                                    разрабатывать новые проекты</p>
                                <div className="course-icon">
                                    <NavLink className="course-info" to={"/Courses-frontend"}>Подробнее</NavLink>
                                    <BsArrowRight className='icon-right'/>
                                </div>
                            </div>
                        </div>
                        <div className="course_school">
                            <h2>Backend-разработчик</h2>
                            <div className="text_school">
                                <p>Специалист, который отвечает за построение
                                    логики для воплощения любой идеи.
                                    Он собирает фундамент и опорную систему для
                                    проекта - от простого сайта для магазина
                                    одежды до сложных вычислительных систем
                                    нейронных сетей.</p>
                                <div className="school-icon">
                                    <NavLink className="course-school-info" to={"/Courses-frontend"}>Подробнее</NavLink>
                                    <BsArrowRight className='icon-right'/>
                                </div>
                            </div>
                        </div>
                        <div className="course_school">
                            <h2>UX / UI Дизайнер</h2>
                            <div className="text_school">
                                <p>Креативный специалист, который придумывает
                                    дизайн и интерфейс продукта.
                                    Специалист UX/UI отвечает за подбор форм, цветов,
                                    Функциональности дизайна и прочих важных параметров
                                    для комфортного использования продукта.</p>
                                <div className="school-icon">
                                    <NavLink className="course-school-info" to={"/Courses-frontend"}>Подробнее</NavLink>
                                    <BsArrowRight className='icon-right'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="click-course">
                        <NavLink to={"/Course"} className="button-course">Все курсы</NavLink>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseSchool;