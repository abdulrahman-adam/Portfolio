
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom";
import { AnimationProvider } from './context/AnimationProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AnimationProvider>
    <App />
  </AnimationProvider>
  </BrowserRouter>,
)
