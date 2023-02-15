import React from 'react';
import image_about from "../../../images/hero1.png"
import image_about1 from "../../../images/hero2.png"

const AboutHero = () => {
    return (
        <>
            <div id="about_hero">
                <div className="container">
                    <div className="about_hero_content">
                        <div className="hero_were">
                            <p className="hero_were_p">Главная /О нас</p>
                        </div>
                        <div className="content_title">
                            <h1>О нас</h1>
                            <p>Курсы IT-профессий Motion Web была основана в 2021-ом году в Бишкеке с целью
                                <br/>дать возможность каждому человеку, даже без опыта в технологиях, гарантированно
                                <br/>освоить IT-профессию.</p>
                            <p>Форма обучения - онлайн, с применением электронного обучения и дистанционных
                                <br/>образовательных технологий  на образовательной платформе Moodle и прямые эфиры с
                                <br/>преподавателем.   154 академических часа трудоёмкости <br/>учебной деятельности отведено
                                практическим занятиям и выполнению <br/>практических заданий.</p>
                        </div>
                        <div className="content_image">
                            <img src={image_about} alt="" className="photo-talk"/>
                            <img src={image_about1} alt="" className="photo-task"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutHero;