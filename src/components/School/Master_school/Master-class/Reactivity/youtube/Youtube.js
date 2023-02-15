import React from 'react';
import rectangle from './../../../../../../images/ev.png'
import images from './../../../../../../images/you.png'
import school from './../../../../../../images/you3.png'
import you2 from './../../../../../../images/you2.png'
import you3 from './../../../../../../images/you4.png'
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {AiOutlineYoutube} from "react-icons/ai";

const Purchases = () => {
    return (
        <>
            <div id='purchases'>
                <div className="container">
                    <div className="purchases">
                        <div className="purchases--text">
                            <p style={{color: '#FFF'}}><span
                                style={{color: '#A5A5A5'}}>Главная / Мастер классы /</span> Реактивное программирование
                                на
                                Java</p>
                        </div>
                        <div className="make">
                            <div className="purchases--one">
                                <div className="purchases--one--text">
                                    <h1>Reactivity</h1>
                                    <p>Когда нужно переходить от прокачивания личной <br/>
                                        эффективности к изучению эффективности командой?
                                    </p>
                                </div>
                                <div className="make--one__img">
                                    <img src={images} alt=""/>
                                    <AiOutlineYoutube className='icons'/>
                                </div>
                            </div>
                            <div className="make--one">
                                <div className="purchases--one--img">
                                    <div className="purchases--one--img__one">
                                        <img src={rectangle} alt="img"/>
                                    </div>
                                    <div className="purchases--one--img__two">
                                        <h2>Евгений Александрович</h2>
                                        <p>Frontend developer</p>
                                    </div>
                                </div>
                                <div className="make--one--page">
                                    <div className="make--one--page--video">
                                        <div className="make--one--page--video--img">
                                            <img src={images} alt=""/>
                                        </div>
                                        <div className="make--one--page--video--text">
                                            <h1>1  Reactivity</h1>
                                            <p>Урок</p>
                                        </div>
                                    </div>
                                    <div className="make--one--page--video">
                                        <div className="make--one--page--video--img">
                                            <img src={you2} alt=""/>
                                        </div>
                                        <div className="make--one--page--video--text">
                                            <h1>2  Reactive approach</h1>
                                            <p>Урок</p>
                                        </div>
                                    </div>
                                    <div className="make--one--page--video">
                                        <div className="make--one--page--video--img">
                                            <img src={school} alt=""/>
                                        </div>
                                        <div className="make--one--page--video--text">
                                            <h1 style={{fontSize: '14px'}}>3  Observable example
                                            </h1>
                                            <p>Урок</p>

                                        </div>
                                    </div>
                                    <div className="make--one--page--video">
                                        <div className="make--one--page--video--img">
                                            <img src={you3} alt=""/>
                                        </div>

                                        <div className="make--one--page--video--text">
                                            <h1>4  Implementing and subscribing to an observer
                                            </h1>
                                            <p>Урок</p>
                                        </div>
                                    </div>
                                    <div className="make--one--page--btn">
                                        <button style={{color: '#A5A5A5'}}><MdOutlineKeyboardArrowLeft
                                            style={{fontSize: '18px'}}/>Предыдущий урок
                                        </button>
                                        <button>Следующий урок <MdOutlineKeyboardArrowRight style={{fontSize: '18px'}}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="streams">
                        <div className="streams--text">
                            <h2>
                                Как работает многопоточность в Java? Старая добрая <br/>многопоточность в Java — это
                                базовые примитивы <br/> многопоточности:
                            </h2>
                        </div>
                        <div className="streams--one">
                            <div className="streams--one--text">
                                <ul>
                                    <li>
                                        Threads (потоки);
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Synchronization (синхронизация);
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Wait/notify (ожидание/уведомление).
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="streams--two">
                            <div className="streams--two--text">
                                <h2>
                                    Сложно писать, сложно отлаживать, сложно <br/>тестировать.
                                </h2>
                            </div>
                            <div className="streams--two--ul">
                                <ul>
                                    <li>
                                        Java 5
                                        Future interface:
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        V get()
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        boolean cancel()
                                        V get()
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        boolean isCancelled()
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        boolean isDone()
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Executors
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Callable interface
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        BlockingQueue
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Purchases