import React from 'react';
import Home_men from '../../../../top-course/src/images/homemen.png';
import Home_file from '../../../../top-course/src/images/homefile.png';
import Home_bracket from '../../../../top-course/src/images/homebracket.png';
import Home_lamp from '../../../../top-course/src/images/homelamp.png';
import Home_setting from '../../../../top-course/src/images/homesetting.png';

const _Hero = () => {
    return (
        <>
            <div id="home-hero">
                <div className="home-hero">
                    <div className="home-hero_desc">
                        <h1>IT образовательная платформа </h1>
                        <p>Наша образовательная платформа вам даст необходимые практические знания для адаптации в IT-сфере.</p>
                    </div>
                    <div className="home-hero_img-block">
                        <div className="lg-circle">
                            <div className="md-circle">
                                <div className="sm-circle"></div>
                            </div>
                        </div>
                        <div className="images">
                            <img className="images-men" src={Home_men} alt=""/>
                            <img className="images-file" src={Home_file} alt=""/>
                            <img className="images-bracket" src={Home_bracket} alt=""/>
                            <img className="images-lamp" src={Home_lamp} alt=""/>
                            <img className="images-setting" src={Home_setting} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default _Hero;