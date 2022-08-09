import "./App.css";

function App() {
  return (
    <div className="app-wraper">

      <header className="header">
        <img src="https://avatars.mds.yandex.net/i?id=446734f9157fa66ecc70cdf6ee332f6f-5865789-images-thumbs&n=13&exp=1" />
      </header>

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
