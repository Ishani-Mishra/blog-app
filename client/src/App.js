// Include these features in the website-

// 1. Anyone accessing the website can read all the blogs that have been written
// 2. Blog will have details of - the author, blog content, date written
// 3. Users can log in and write and upload blogs to the website which will be visible to everyone.
// 4. Logged in users can create a new blog, edit and delete their exisiting blog.
// 5. Create an admin login, that can remove any user or edit/delete anyone's blog content.

// Tech stack-

// 1. Frontend - React JS
// 2. Backend- Node JS
// 3. Authentication- Passport, JWT tokens or OAuth anything else is also okay
// 4. Database - Mongo DB
import Home from "./Pages/Home/Home"
import Topbar from "./atoms/TopBar/Topbar";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/write";
import Settings from "./Pages/settings/settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./contextApi/Context";


function App() {
  const { user }=useContext(Context);
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route path="/register">
          {user ? <Home />:<Register />}
        </Route>
      </Switch>
      <Switch>
        <Route path="/login">
          {user?<Home />:<Login />}
        </Route>
      </Switch>
      <Switch>
        <Route path="/write">
          {user?<Write />:<Register />}
        </Route>
      </Switch>
      <Switch>
        <Route path="/settings">
          {user?<Settings />:<Register />}
        </Route>
      </Switch>
      <Switch>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
