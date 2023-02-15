

import React from 'react';

const BlogClass = () => {
    return (
        <>
            <div id="class">
                <div className="container">
                    <div className="class_text">
                        <div className="class_week">
                            <div className="text_p">
                                <p>Что, как и почему</p>
                            </div>
                            <div className="text_we">
                                <div className="we_bottom">
                                    <h1>О МАСТЕР-КЛАССЕ</h1>
                                    <p>В режиме мастер-класса он продемонстрировал, почему так важен неблокирующий
                                        ввод-вывод, в чем минусы классической многопоточности, в каких ситуациях нужна
                                        реактивность, и что она может дать. А еще описал недостатки реактивного подхода.</p>
                                </div>
                                <div className="we_file">
                                    <h1>Переходите к видеоурокам, что бы научится: </h1>
                                    <div className="file_circle">
                                        <ul>
                                            <li>Чтению файла (blocked on reading file);
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>Что бы научиться базе данных (blocked on reading from DB);

                                            </li>
                                        </ul>
                                        <ul>
                                            <li>Научится использовать в  сложных вычислениях (blocked on heavy calculations);

                                            </li>
                                        </ul>
                                        <ul>
                                            <li>На ответе от клиента (blocked on responding the client).
                                            </li>
                                        </ul>

                                    </div>

                                </div>
                                <div className="buttons">
                                    <div className="button">
                                        <button className="btn1">Купить мастер-класс</button>
                                    </div>
                                    <div className="button1">
                                        <button className="btn2">Смотреть программу</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="access">
                            <div className="access_come">
                                <div className="access_days">
                                    <h3>Доступ: </h3>
                                    <h1>6 недель</h1>
                                </div>
                                <div className="access_das">
                                    <h3>В мастер-класс входит: </h3>
                                    <h1>5 уроков</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogClass;