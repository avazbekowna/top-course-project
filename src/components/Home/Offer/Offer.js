import React from 'react';
import {NavLink} from "react-router-dom";

const Offer = () => {
    return (
        <>
          <div id="offer">
              <div className="container">

                  <h1>Главная / <span>Оформить подписку</span></h1>
                  <div className="register-course_group-form">
                      <h2>Год</h2>
                      <form id="form">
                          <div className="blog">
                              <fieldset>
                                  <legend>Ф.И.О*</legend>
                                  <input name="text" type="text"/>
                              </fieldset>
                          </div>
                          <div className="blog">
                              <fieldset>
                                  <legend>Телефон*</legend>
                                  <select>
                                      <option>+996</option>
                                      <option>+998</option>
                                      <option>+992</option>
                                  </select>
                                  <input name="phone" type="tel"/>
                              </fieldset>
                          </div>
                          <div className="blog">
                              <fieldset>
                                  <legend>E mail*</legend>
                                  <input name="email" type="email"/>
                              </fieldset>
                          </div>
                          <p className="form-title">Выберите платежную карту</p>
                          <div className="form-group">
                              <div className="form-group_block">
                                  <input type="radio" name="money"/>
                                  <span>Visa</span>
                              </div>
                              <div className="form-group_block">
                                  <input type="radio" name="money"/>
                                  <span>MasterCard</span>
                              </div>
                          </div>
                          <div className="blog">
                              <fieldset>
                                  <legend>Номер карты *</legend>
                                  <input name="number" type="number"/>
                              </fieldset>
                          </div>
                          <div className="form-group">
                              <div className="first-block blog">
                                  <fieldset>
                                      <legend>ММ/ГГ *</legend>
                                      <input name="date" type="date"/>
                                  </fieldset>
                              </div>
                              <div className="second-block blog">
                                  <fieldset>
                                      <legend>CVC *</legend>
                                      <input name="number" type="number"/>
                                  </fieldset>
                              </div>
                          </div>
                          <div className="form-check">
                              <input name="check" type="checkbox"/>
                              <p>Я ознакомился и согласен с Условиями оказания услуг</p>
                          </div>
                          <NavLink className="form-btn">Оплатить 225.00$</NavLink>

                          <div className="every">
                              <p>Все мастер-классы нашей школы</p>
                              <p>6 новых статей каждый месяц.</p>
                              <h4>Образовательная платформа доступна на условиях ежегодной подписки.</h4>

                              <div className="every-bob">
                                  <h1>Другие варианты подписки:</h1>
                                  <div className="every-bob-me">
                                      <button>Год + - 585,00 $/год</button>
                                  </div>
                                  <button>Месяц  - 105,00 $/год</button>
                              </div>

                              <div className="every-did">
                                  <h3>Отменить можно в любой момент!</h3>
                                  <p>При оплате через Fondy, с Вашей карты автоматически будут списываться 225,00 $/год, которые являются стандартной ценой участия.</p>
                                  <p>Вы всегда можете отменить подписку в Вашем личном кабинете и больше списаний не будет.</p>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
        </>
    );
};

export default Offer;