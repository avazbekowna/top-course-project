import photo from "../../../images/school2.png"
import girl from "../../../images/school3.png"

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const CommentSchool = () => {
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3, slidesToScroll: 3,
                infinite: true, dots: false
            }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2, slidesToScroll: 2,
                    infinite: true, dots: false
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };


    const block = [{
        image: photo,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: photo,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: photo,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: girl,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: girl,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: girl,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
    }, {
        image: girl,
        name: "Виктор Александарович",
        desc: "С радостью оставляю положительной отзыв! Пройдя курс 'UX/UI Designer с нуля' я с остался полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и благодарю!",
        date: "3.02.2022 г"
}
]
    return (<>
        <section id="slider">
            <div className="container">
                <div className="slider--general">
                    <h3>Отзывы наших студентов</h3>
                    <Slider {...setting}>
                        {block.map((el, idx) => (
                            <div className='slider--general__block' key={idx}>
                                <img className='slider--general__block--phone' src={el.image} alt=""/>
                                <h1>{el.name}</h1>
                                <p className='slider-text'>
                                    {el.desc}
                                </p>
                                <h2>{el.date}</h2>
                            </div>))}
                    </Slider>
                </div>
            </div>
        </section>
    </>);
};

export default CommentSchool;