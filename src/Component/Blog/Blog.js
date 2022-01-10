import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    return (
        <div className=" text-light mt-5">
            <div className='d-flex justify-content-center'>
            <div style={{marginTop:'50px'}} className='blog'>
                <Link to="html">HTML</Link>
                <Link to="css">CSS</Link>
                <Link to="/javaScript" >JavaScript</Link>
                <Link to="react">React Js</Link>
                <Link to="node">Node Js</Link>
            </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Blog;