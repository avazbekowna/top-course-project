
import React from 'react';
import {BsCheckLg} from "react-icons/bs";


const BlogProcess = () => {
    return (
        <>
            <div id="process">
                <div className="container">
                    <div className="process_learning">
                        <div className="learning_h1">
                            <h1>Процесс обучения</h1>
                            <p>Каждый из наших мастер-классов состоит из 2-8 уроков. Рекомендуем проходить мастер-класс последовательно, урок за уроком</p>
                        </div>
                        <div className="community">
                            <div className="community_last">
                                <div className="last">
                                    <div className="last_app">
                                        <h1>1</h1>
                                        <h2>Мастер-класс</h2>
                                        <p>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным материалам</p>
                                    </div>
                                    <div className="last2">
                                        <div className="last_app">
                                            <h1>2</h1>
                                            <h2>Своё расписание
                                            </h2>
                                            <p>Доступ к мастер-классам открыт 24/7. Вы сами решаете, когда у вас следующий урок</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="last">
                                    <div className="last_app">
                                        <h1>1</h1>
                                        <h2>Мастер-класс</h2>
                                        <p>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным материалам</p>
                                    </div>
                                    <div className="last2">
                                        <div className="last_app">
                                            <h1>2</h1>
                                            <h2>Своё расписание
                                            </h2>
                                            <p>Доступ к мастер-классам открыт 24/7. Вы сами решаете, когда у вас следующий урок</p>
                                        </div>
                                    </div>

                                    Азима Клуб, [20.01.2023 16:34]
                                </div>
                            </div>
                            <div className="community_past">
                                <div className="past">
                                    <h1>Мастер-класс “Реактивное  <br/>программирование на Java :  <br/>как,    зачем и стоит ли? Часть 1”</h1>
                                    <h3>46,00 $</h3>
                                    <div className="past_icons">
                                        <div className="past_ch">
                                            <BsCheckLg style={{color:'#000'}} className="ch_icon"/>
                                            <h4>Доступ к мастер классу навсегда</h4>
                                        </div>
                                        <div className="past_che">
                                            <BsCheckLg style={{color:'#000'}} className="ch_icon"/>
                                            <h4>Доступны все 5 уроков</h4>
                                        </div>
                                        <div className="past_chs">
                                            <BsCheckLg style={{color:'#000'}} className="ch_icon"/>
                                            <h4>Дополнительные материалы</h4>
                                        </div>
                                    </div>
                                    <div className="btn">
                                        <button>Купить мастер-класс </button>
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

export default BlogProcess;