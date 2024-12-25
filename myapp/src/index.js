import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Your CSS file (if it exists)
import App from './App';  // Import App component from App.js

const root = ReactDOM.createRoot(document.getElementById('root'));  // For React 18 and above
root.render(
  <React.StrictMode>
    <App />  {/* Render the App component */}
  </React.StrictMode>
);
