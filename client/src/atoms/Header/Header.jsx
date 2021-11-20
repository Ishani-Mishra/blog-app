import './header.css';
import Photo from'./blog-photo-1.jpg';

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Full stack MERN</span>
                <span className="headerTitleLg">Blog Application</span>
            </div>
            <img className="header-image" src={Photo} alt=""></img>
        </div>
    )
}