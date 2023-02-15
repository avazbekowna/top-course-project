import React from 'react';
import Course_school from "./Course_school/Course_school";
import Master_school from "./Master_school/Master_school";
import Level_paket from "./level_paket/Level_paket";
import Comment_school from "./comment_school/Comment_school";
import Hero from "./Hero-school/Hero";
import FormSchool from "./form-school/Form-school";

const School = () => {
    return (
        <div>
            <Hero/>
            <Course_school/>
            <Master_school/>
            <Level_paket/>
            <Comment_school/>
            <FormSchool/>
        </div>
    );
};

export default School;