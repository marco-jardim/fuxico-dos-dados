import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';

// Ponto de entrada do aplicativo. Renderiza o componente principal
// dentro da div #root definida em index.html.
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);