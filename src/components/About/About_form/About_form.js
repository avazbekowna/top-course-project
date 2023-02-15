import React from 'react';

const FormAbout = () => {
    return (
        <>
            <div className="form_school">
                <div className="container">
                    <div className="form_school_content">
                        <div className="form_text">
                            <h1>Оставить заявку</h1>
                            <p>Заполните краткий бриф с ключевым вопросами, <br/>
                                и мы подготовимся к разговору с вами </p>
                        </div>
                        <div className="form_input">
                            <div className="name_form">
                                <p>ФИО*</p>
                                <input type="text" className='name'/>
                            </div>
                            <div className="call_form_school">
                                <p>Номер телефон*</p>
                                <input type="number" className='call_form'/>
                            </div>
                            <div className="gmail_form_school">
                                <p>Email*</p>
                                <input type="email" className='gmail_form'/>
                            </div>
                            <div className="button_form_school">
                                <button className="button_form">
                                    Отправить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FormAbout;