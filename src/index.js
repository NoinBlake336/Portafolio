import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TranslateProvider } from './context/Translate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TranslateProvider>
      <App />
  </TranslateProvider>
);

