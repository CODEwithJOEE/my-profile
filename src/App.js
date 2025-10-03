import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

// Global layout pieces
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./Section/Home";
import About from "./Section/About";
import Projects from "./Section/Projects";
import Experience from "./Section/Experience";
import Skills from "./Section/Skills";
import Education from "./Section/Education";
import Contact from "./Section/Contact";
import Certificates from "./Section/Certificates";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

// Layout keeps Header/Footer on every page and renders the active page in between
function Layout() {
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      {/* Scroll to the top whenever the route changes */}
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificates />} />

          {/* 404 fallback -> send unknown routes back home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
