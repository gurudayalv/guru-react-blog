import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import components
import Home from './Home';
import Post from './Post';
import About from './About';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navigation bar */}
        <nav>
        <div className="nav-brand">My Blog</div>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>

        {/* Main content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
