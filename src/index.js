import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: "First post", likeCount: 10 },
  { id: 2, message: "Second post", likeCount: 12 }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData}/>
  </React.StrictMode>
);

reportWebVitals();
