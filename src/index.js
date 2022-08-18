import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { rerenderEntireTree } from './render';
import state from './redux/state';

export const root = ReactDOM.createRoot(document.getElementById('root'));

rerenderEntireTree(state);

reportWebVitals();
