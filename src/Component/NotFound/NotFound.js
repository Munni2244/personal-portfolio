import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center text-light mt-5">
            <h1 >Page Is Not Found</h1>
            <Link to="/"> <button>Go Back Home</button></Link>
        </div>
    );
};

export default NotFound;