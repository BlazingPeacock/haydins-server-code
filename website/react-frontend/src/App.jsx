import React, { useState } from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';


const App = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const closeMenu = () => setMenuOpen(false);

    const location = useLocation();

    return (
        <div className="app" onClick={closeMenu}>
            <header className="header">
                <div className="container" onClick={(e) => e.stopPropagation()}>
                    <div className="menu-button" onClick={toggleMenu}>☰</div>
                    <h1 className="title">Hunter Johnson</h1>
                    {menuOpen && (
                    <nav className="dropdown-menu">
                        <a href="/">Home</a>
                        <a href="/logbook">Log Book</a>
                        <a href="/aboutme">About Me</a>
                        <a href="/blog">Blog</a>
                    </nav>
                )}
              </div>
            </header>
            <main className="content">
               {location.pathname === '/' && ( 
                 <section className="intro">
                    <h2>Welcome to My DevOps Project</h2>
                    <p>
                        This project showcases my DevOps skills, including CI/CD architecture, containerization, and secure web hosting.
                    </p>
                    <p>
                        Explore the <strong>About Me</strong> section for my resume, visit the <strong>Blog</strong> for a project write-up, and don’t forget to sign in at the <strong>Logbook</strong>.
                    </p>
                </section>
               )}
               {children}
            </main>
        </div>
    );
};

export default App;

