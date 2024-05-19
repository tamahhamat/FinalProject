import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProjectTimeline from './ProjectTimeline';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rafiki Village Project</h1>
      </header>
      <div className="App-body">
        <ProjectTimeline />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/RafikiData" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;