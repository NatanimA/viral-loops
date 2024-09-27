import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Display from './pages/Display';
import NotFound from './pages/404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/preview/:id" element={<Display />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </Router>
  );
}


export default App;
