import "./settings.css";
import Sidebar from "../../atoms/sidebar/Sidebar"

export default function settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form  className="settingsForm">
                    <label>Profile Picture</label>
                    <label>Username</label>
                    <input type="text" placeholder="Ishani" name="name" />
                    <label>Email</label>
                    <input type="email" placeholder="ishani1407@gmail.com" name="email" />
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" />
                    <button className="settingsSubmitButton" type="submit">
                        Update
                    </button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}
