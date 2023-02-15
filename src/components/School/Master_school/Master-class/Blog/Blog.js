
import React from 'react';
import BlogAccordion from "./Blog-accordion/Blog-accordion";
import BlogMaster from "./Blog-master/Blog-master";
import BlogProcess from "./Blog-process/Blog-process";
import BlogClass from "./Blog-class/Blog-class";
import BlogProgram from "./Blog-program/Blog-program";


const Blog = () => {
    return (
        <div>
            <BlogMaster/>
            <BlogClass/>
            <BlogProgram/>
            <BlogProcess/>
            <BlogAccordion/>


        </div>
    );
};

export default Blog;