import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Skills from "./contents/Skills";
import Contact from "./contents/Contact";
import Home from "./contents/Home";
import About from "./contents/About";
import Education from "./contents/Education";
import ProjectCard from "./components/ProjectCard";
import { FontAwesome } from 'react-icons/fa'

function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        {/* Home Route */}
        <Route exact path="/">
          <Home />
        </Route>
        {/* About Route */}
        <Route path="/about">
          <About/>
        </Route>
        {/* Education Route */}
        <Route path="/education">
          <Education/>
        </Route>
        {/* Skills route */}
        <Route path="/skills">
          <Skills/>
        </Route>
        {/* Contact Route */}
        <Route path="/contact">
          <Contact/>
        </Route>
      </div>
    </Router>
    
  );
}

export default App;
