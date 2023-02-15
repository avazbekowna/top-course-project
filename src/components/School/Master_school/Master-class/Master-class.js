import React from 'react';
import {NavLink} from "react-router-dom";

const MasterClass = () => {
    return (
        <>
            <div className="master" id="master">
                <div className="container">
                    <span className="span-text">Главная / Мастер классы</span>
                    <div className="content-master">
                        <h1>Мастер классы</h1>
                        <div className="block-master">
                            <div className="info-master">
                                <NavLink to={"/Reactivity"} ><h3>Реактивное программирование на Java: как, зачем и стоит ли? </h3></NavLink>
                                <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого относительно нового подхода и почему сейчас он в тренде, рассказал на конференции РИТ++ ...</p>
                            </div>
                        </div>
                        <div className="block-master">
                            <div className="info-master">
                                <NavLink to={'/Reactivity'}><h3>Олимпиада для айтишников: как мотивировать молодых разработчиков</h3></NavLink>
                                <p>В современном HR широко распространены событийные мотивационные мероприятия, как внешние, так и внутренние – различные социальные проекты, выставки, праздники, мастер-классы и тренинги, спортивные и ЗОЖ.</p>
                            </div>
                        </div>
                        <div className="block-master">
                            <div className="info-master">
                                <NavLink to={'/Reactivity'}><h3>Семинар Дино Эспозито “Real-time Data Coming at Last in ASP.NET Core”</h3></NavLink>
                                <p>Евангелистом разработки под Android и на Kotlin в JetBrains, а также членом команды, которая ведет WURFL, базу данных с информацией о мобильных устройствах, которая используется такими компаниями....
                                </p>
                            </div>
                        </div>
                        <div className="block-master">
                            <div className="info-master">
                                <NavLink to={'/Reactivity'}><h3>DevOps конференция в Москве</h3></NavLink>
                                <p>Сборки на Jenkins с закрытыми глазами? А настроить Docker без смс, переплат и регистрации? Что будет, если билд соберется в течение одной миллисекунды? Эти и другие паранормальные явления слетятся обсудить более 400 человек...</p>
                            </div>
                        </div>
                        <div className="block-master">
                            <div className="info-master">
                                <NavLink to={'/Reactivity'}><h3>Олимпиада для айтишников: как мотивировать молодых разработчиков</h3></NavLink>
                                <p>В современном HR широко распространены событийные мотивационные мероприятия, как внешние, так и внутренние – различные социальные проекты, выставки, праздники, мастер-классы и тренинги, спортивные и ЗОЖ.</p>
                            </div>
                        </div>
                        <div className="block-master">
                            <div className="info-master">
                                <NavLink to={'/Reactivity'}><h3>Как научиться учиться.</h3></NavLink>
                                <p>Только за своим столом, но и в других местах - чтобы в непривычной ситуации нужная информация не вылетела из головы. Перед экзаменом, тестом, сертификацией можно повторять “по нарастающей” - каждый день чуть больше, чем в предыдущий...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MasterClass;