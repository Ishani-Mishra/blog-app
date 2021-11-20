import "./write.css";
import { useState,useContext } from 'react';
import axios from "axios";
import { Context } from '../../contextApi/Context';

export default function Write() {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const {user}=useContext(Context);
    const postHandler= async (e)=>{
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc,
        };
        try{
            const res=await axios.post("/posts", newPost);
            window.location.replace("/post/"+res.data._id)
        }catch(err){
            console.log(err);
        }

    };
    return (
        <div className="write">
            <form  className="writeForm" onSubmit={postHandler}>
                <div className="writeFormGroup">
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} onChange={e=>{
                        setTitle(e.target.value);
                    }}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Desc..." className="writeInput writeText" onChange={e=>{
                        setDesc(e.target.value);
                    }}></textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}
