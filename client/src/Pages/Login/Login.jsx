import "./login.css";
import { Link } from "react-router-dom";
import { useRef } from 'react';
import { Context } from '../../contextApi/Context';
import { useContext } from 'react';
import axios from "axios";

export default function Login() {
    
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching, user }=useContext(Context)


    const handleSubmit= async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res=await axios.post("/auth/login",{
                username:userRef.current.value,
                password:passwordRef.current.value,
            });
            dispatch({type:"LOGIN_SUCCESS", payload:res.data});
        }catch(err){
            dispatch({type:"LOGIN_FAILURE"});
        }
    };
    console.log(isFetching)
    console.log(user)
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form action="" className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="loginInput" placeholder="Enter your Username..." ref={userRef}/>
                <lable>Password</lable>
                <input className="loginInput" type="password" placeholder="Enter your password..." ref={passwordRef}/>
                <button className="loginButton" type="submit">Login</button>
            </form>
                <button className="loginRegisterButton">
                    <Link className="Link" to="/register">Register</Link>
                </button>
        </div>
    );
}
