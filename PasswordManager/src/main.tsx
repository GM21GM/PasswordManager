import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ verwendet `createRoot()`
import './index.css';  // oder 'tailwind.css', falls du Tailwind verwendest
import App from './App';  // Deine Hauptkomponente

// Hole das DOM-Element mit der ID 'root' aus der index.html
const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);  // React 18+ verwendet createRoot()

// Rendern der App-Komponente
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
