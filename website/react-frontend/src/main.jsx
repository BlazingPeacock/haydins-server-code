import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LogBook from './LogBook';
import AboutMe from './AboutMe';
import Blog from './Blog';
import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <App>
                        </App>
                    }
                />
                <Route
                    path="/logbook"
                    element={
                        <App>
                            <LogBook />
                        </App>
                    }
                />
                <Route
                    path="/aboutme"
                    element={
                        <App>
                            <AboutMe />
                        </App>
                    }
                />
                <Route
                    path="/blog"
                    element={
                        <App>
                            <Blog />
                        </App>
                    }
                />
            </Routes>
        </Router>
    </StrictMode>
);

