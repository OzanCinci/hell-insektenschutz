// DEFAULT
import React from 'react';
import ReactDOM from 'react-dom/client';
// STYLES
import './index.css';
// COMPONENTS
import App from './App';
import reportWebVitals from './reportWebVitals';
// REDUX -> STORE AND PROVIDER
import store from './store.js'
import {Provider} from 'react-redux'
// HELMET
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </HelmetProvider>
    </React.StrictMode>
);
