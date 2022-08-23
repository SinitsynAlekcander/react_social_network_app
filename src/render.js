import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import { root } from './index';

export let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
    <React.StrictMode>
          <App appState={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    </BrowserRouter>
    );
}
