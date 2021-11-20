import './post.css';
import { Link } from "react-router-dom";

export default function Post({post}) {
    return (
        <div className="post">
           <div className="postInfo">
                   {post.categories.map((cat)=>(
                        <div className="postCats">
                            <span className="postCat">{cat}</span>
                        </div>
                   ))}
                <Link className="Link" to={`/post/${post._id}`}><span className="postTitle">{post.title}</span></Link>
                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString}</span>
            </div>
            <div className="postDec">{post.desc}</div>
        </div>
    )
}
                    



