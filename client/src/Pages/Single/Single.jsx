import React from 'react';
import './single.css';
import SinglePost from '../../atoms/singlePost/SinglePost';
import Sidebar from '../../atoms/sidebar/Sidebar';



const Single=()=> {

    return (
        <div className="single">
                <SinglePost />
                <Sidebar />
        </div>
    )
}

export default Single;

