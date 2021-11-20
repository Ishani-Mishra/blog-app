import "./Topbar.css";
import { Link } from "react-router-dom";
import photo from "./pp.jpg";
import { useContext } from "react";
import { Context } from "../../contextApi/Context";
export default function Topbar() {
    const { user,dispatch }=useContext(Context);
    const handleLogout=()=>{
        dispatch({
            type:"LOGOUT"
        })
    }
    return (
        <div className="topbar">
            <div className="left">
                <div className="social-media">
                    <i class="topIcons fab fa-instagram-square"></i>
                    <i class="topIcons fab fa-facebook-square"></i>
                    <i class="topIcons fab fa-linkedin"></i>
                    <i class="topIcons fab fa-twitter-square"></i>
                </div>
            </div>
            <div className="center">
                <ol className="TopList">
                    <li className="top-pages"><Link className="Link" to="/">HOME</Link></li>
                    <li className="top-pages"><Link className="Link" to="/">ABOUT</Link></li>
                    <li className="top-pages"><Link className="Link" to="/write">WRITE</Link></li>
                    <li className="top-pages"><Link className="Link" to="/">CONTACT</Link></li>
                    <li className="top-pages"><Link className="Link" to="/" onClick={handleLogout}>{user && "LOGOUT"}</Link></li>
                    

                </ol>
            </div>
            <div className="right">
                {user?( 
                        <div className="top-image">
                            <img className="image" src={photo} alt=""></img>
                        </div>):(<ol className="TopList">
                            <li className="top-pages">
                                <Link className="Link" to="/login">LOGIN</Link>
                            </li>
                            <li className="top-pages">
                                <Link className="Link" to="/register">REGISTER</Link>
                            </li>
                        </ol>)}
                <div>
                    <i class="search-icon fas fa-search"></i>
                </div>
            </div>
        </div>
    )
}
