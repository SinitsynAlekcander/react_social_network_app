import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app-wraper">
      <Header />


      <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Message</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Setting</a>
        </div>
      </nav>

      <div className="main-conent">
        <div>
          <img src="https://hb.bizmrg.com/websiterfs/news/216431/62eff614cd7ce_582x388.jpg" />
        </div>
        <div>
          Ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
        </div>
        <div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
