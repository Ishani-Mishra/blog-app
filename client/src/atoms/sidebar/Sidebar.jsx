import './sidebar.css';
import axios from "axios";
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const [cats,setCats]=useState([]);
    useEffect(()=>{
        const getCats= async ()=>{
            const res = await axios.get("/categories");
            setCats(res.data);
            console.log(res);
        };
        getCats();
    },[])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cumque dolorem eveniet id accusamus rerum necessitatibus harum vitae sequi eum est, 
                    temporibus ut quaerat assumenda fugiat doloremque rem ad eos nobis maxime animi incidunt. 
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ol className="sidebarList">
                    {cats.map((c)=>(
                        <Link className="Link" to={`/?cat=${c.name}`}>
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}

                    {/* <li className="sidebarListItem">Hobbies</li>
                    <li className="sidebarListItem">Interests</li>
                    <li className="sidebarListItem">Specialization</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Work</li> */}
                </ol>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocialContainer">
                <i class="topIcons fab fa-instagram-square"></i>
                    <i class="topIcons fab fa-facebook-square"></i>
                    <i class="topIcons fab fa-linkedin"></i>
                    <i class="topIcons fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
}
