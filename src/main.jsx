import React from 'react';
import ReactDOM from 'react-dom/client';
import "./sass/main.scss";
import Header from './layout/Header/Header';
import Contact from './layout/Contact/Contact';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Navigate to="/" replace />} />
        {/* <Route path="/projects/:id" element={<Projects />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      <Contact />
    </Router>
  </React.StrictMode>,
)
