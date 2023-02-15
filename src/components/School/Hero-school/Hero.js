import React from 'react';
import imageSchool from '../../../images/school1.svg'

const Hero = () => {
    return (
        <>
            <div className="hero" id="hero">
                <div className="container">
                    <span>Главная / О школе</span>
                    <div className="hero_content">
                        <div className="about_school">
                            <div className="about_school_info">
                                <h1>О нашей школе:</h1>
                                <p>Наша платформа — это интенсивная программа <br/>
                                    обучения для тех, кто хочет освоить востребованную <br/>
                                    профессию, войти в IT и зарабатывать больше.</p>
                            </div>
                            <div className="about_school_info">
                                <h1>Наша миссия:</h1>
                                <p>Сформировать интерес к современным технологиям <br/>
                                    и помочь школьнику определиться с выбором <br/>
                                    будущей специальности.</p>
                            </div>

                        </div>

                        <div className="about_school_img">
                            <img src={imageSchool} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;