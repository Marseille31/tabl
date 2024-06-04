import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ServerData from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ServerData />
  </React.StrictMode>
);

ReactDOM.render(root)