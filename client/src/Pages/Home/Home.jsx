import './home.css';
import Header from '../../atoms/Header/Header';
import Posts from '../../atoms/posts/Posts';
import Sidebar from '../../atoms/sidebar/Sidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search }=useLocation();
    useEffect(()=>{
        const fetchPosts= async ()=>{
            const res=await axios.get("/posts"+search)
            setPosts(res.data);
        };
        fetchPosts();
    },[search])
    //logic inside the arrow function(first parameter) will be executed whenever the variable is updated => runs only once at the beginning
    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts}/>
                <Sidebar />
            </div>
        </>
    );
}
