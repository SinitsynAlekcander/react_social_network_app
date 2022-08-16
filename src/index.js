import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

// let postsData = [
//   { id: 1, message: "First post", likeCount: 10 },
//   { id: 2, message: "Second post", likeCount: 12 }
// ]
// let dialogsData = [
//   { id: 1, name: "Damian" },
//   { id: 2, name: "Alisa" },
//   { id: 3, name: "Sasha" },
//   { id: 4, name: "Tanya" },
// ]
// let messagesData = [
//   { id: 1, message: "Hello" },
//   { id: 2, message: "World" },
//   { id: 3, message: ")))" },
// ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App appState={state}/>
  </React.StrictMode>
);

reportWebVitals();
