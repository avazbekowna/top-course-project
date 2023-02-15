import React from 'react';
import image_sertificat from "../../../images/About3.png"

const AboutSertificate = () => {
    return (
        <>
            <div className="sertificat" id="sertificat">
                <div className="container">
                    <div className="sertificat_top">
                        <div className="top_bottom">
                            <h1>Сертификат</h1>
                            <p>По окончании обучения выдается онлайн сертификат.</p>
                        </div>
                        <div className="top_img">
                            <img src={image_sertificat} alt="" className="photo_top"/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSertificate;