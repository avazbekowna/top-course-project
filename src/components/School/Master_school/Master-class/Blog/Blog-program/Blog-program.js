
import React from 'react'
import image_program from './../../../../../../images/course10.png'
import image_develop from './../../../../../../images/course11.png'
const BlogProgram = () => {
    return (
        <>
            <div id ="program">
                <div className="container">
                    <div className="program_block">
                        <div className="block_input">
                            <h1>ПРОГРАММА МАСТЕР-КЛАССА</h1>
                            <button className="tops"><p>1</p> <span>Reactivity</span></button>
                            <button className="tops"><p>2</p> <span></span></button>
                            <button className="tops"><p>3</p> <span>Observable example</span></button>
                            <button className="tops"><p>4</p> <span>Implementing and subscribing to an observer</span></button>
                            <button className="tops"><p>5</p> <span>Reactive Streams spec</span></button>
                            <div className="buy">
                                <button>Купить мастер-класс </button>
                            </div>


                        </div>
                        <div className="image">
                            <img src={image_program} alt="" className='image_nam' />
                        </div>

                    </div>
                    <div className="develop">
                        <img src={image_develop} alt=""  className="image_man"/>
                        <div className="develop_text">
                            <h4>Мастер класс ведет</h4>
                            <h1>Евгений Александрович</h1>
                            <h3> Frontend developer / Аратор </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogProgram;