import React from 'react'
import ReactDOM from 'react-dom/client'
import "./sass/main.scss";
import Header from './component/Header/Header'
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
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/projects" element={<Navigate to="/" replace />} />
        {/* <Route path="/projects/:id" element={<Projects />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  </React.StrictMode>,
)
