import React from 'react';
// index.jsx or App.jsx
import './index.css';

import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import About from './pages/About'
import Footer from './components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';
import All from './pages/All';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // <--- ADD THIS LINE

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <div>
      <Navbar />
  

 <ToastContainer
  position="top-center"               // Center top of the screen
  autoClose={4000}                    // Auto-close after 4 seconds for better readability
  style={{ zIndex: 9999 }}
  hideProgressBar={false}             // Show progress bar
  newestOnTop={true}                  // New messages appear on top
  closeOnClick                        // Close toast on click
  rtl={false}                          // Left-to-right layout
  pauseOnFocusLoss                     // Pause when user switches tabs
  draggable                            // Allow dragging to dismiss
  pauseOnHover                         // Pause timer on hover
  theme="colored"                       // Add modern colored theme
  toastStyle={{ fontSize: '14px' }}    // Slightly smaller text for elegance
  bodyClassName={() => "font-medium"}   // Medium font for readability
/>


      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/yagoub" element={<All />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
