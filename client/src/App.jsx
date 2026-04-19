
import React from 'react';
import './index.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages/Sections
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


// Utilities
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Certifications from './components/Certifications';
import Services from './components/Services';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <div className="scroll-smooth">
      {/* Toast notifications will stay fixed at the top */}
      <ToastContainer
  position="top-center"
  autoClose={4000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="colored"
  style={{ zIndex: 9999 }}
  toastStyle={{
    fontSize: "14px",
    textAlign: "center",
    borderRadius: "12px",
    padding: "14px 18px",
    fontWeight: "500",
  }}
  bodyClassName={() =>
    "flex items-center justify-center text-center w-full font-medium"
  }
  className="toast-center"
/>

      <Navbar />

      {/* Instead of Routes, we place all components in a stack. 
          Each section is wrapped in a div with an 'id' that matches your navbar links.
      */}
      
      <main>
        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
          <Certifications />
  <Services />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;