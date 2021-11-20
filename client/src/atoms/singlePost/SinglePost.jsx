import axios from "axios";
import { useContext,useEffect,useState } from "react";
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { Context } from '../../contextApi/Context';
import { setUpdateMode } from "react";
import './singlePost.css';
export default function SinglePost() {
    const path=useLocation().pathname.split("/")[2];
    const [post,setPost]=useState("");
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const user  = useContext(Context)

    useEffect(()=>{
        const getPost=async ()=>{
            try{

                const res= await axios.get(`/posts/${path}`);
                setPost(res.data);
                setTitle(res.data.title);
                setDesc(res.data.desc);
            }
            catch(e){
                console.log(e);
            }

        };
        getPost();
    },[path]);

    const handleDelete= async(e)=>{
        try{

            await axios.delete(`/posts/${post._id}`, {data:{username:user.username}});
            window.location.replace("/")
        }
        catch(err) {}
    };

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <h1 className="singlePostTitle">{title}
                {post.username === user?.username &&(
                    <div className="singlePostEdit">
                        <i class="singlePostIcon far fa-edit"onClick={()=>setUpdateMode(true)}></i>
                        <i class="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                    </div>
                )}
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Authour: 
                    <Link to={`/?user=${post.username}`} className="Link">
                        <b>{post.username}</b>
                    </Link>
                    </span>

                    <span className="singlePostDate">{new Date(post.createdAt).toDateString}</span>
                </div>
                <p className="content">{desc}
                </p>
            </div>
        </div>
    );
}

