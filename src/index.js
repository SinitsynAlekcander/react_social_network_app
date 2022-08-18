import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rerenderEntireTree } from './render';

export const root = ReactDOM.createRoot(document.getElementById('root'));

rerenderEntireTree();

reportWebVitals();
