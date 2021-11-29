import React from 'react';
import './App.css';

function App() {
  return (
    <div className='appWraper'>
      <header className='appHeader'>
        <img src='https://yt3.ggpht.com/a/AGF-l79lzK-J9srTPskVDvzM9MaYvHZckUPAS4GNFA=s1920-mo-c-c0xffffffff-rj-k-no' />
      </header>
      <nav className='appNav'>
        <div>
          <a> Profile </a>
        </div>
        <div>
          <a> Messeges </a>
        </div>
        <div>
          <a> News </a>
        </div>
        <div>
          <a> Music </a>
        </div>
        <div>
          <a> Settings </a>
        </div>
      </nav>

      <div className='appContent'>
        <div>
          <img src='https://cdn-images-1.medium.com/max/1024/1*GsEYCGIKf1N4um0naNLRbQ.jpeg' />
        </div>
        <div>
          Ava+description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            Post 1
          </div>
          <div>
            Post 2
          </div>
          <div>
            Post 3
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
