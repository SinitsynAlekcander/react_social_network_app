import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import { root } from './index';

// const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
    <React.StrictMode>
          <App appState={state} addPost={addPost}/>
        </React.StrictMode>
    </BrowserRouter>
    );
}
