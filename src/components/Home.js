import React from 'react';
import '../styles/Home.css';
import profilePic from '../assets/Profile-removebg-preview.png';

const Home = () => {
    return (
        <div className="home-container">
            
            {/* Navbar */}
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Profile */}
            <img 
                src={profilePic} 
                alt="Rorisang Sekomane" 
                className="profile-img" 
            />

            <h1 className="gradient-name">Rorisang Sekomane</h1>

            {/* Intro */}
            <p className="intro">
                Technology-focused Computer Science graduate from Tshwane University of Technology, passionate about building scalable and efficient systems. Skilled in{' '}
                
                <strong style={{ color: 'red' }}>C#</strong>,{' '}
                <strong style={{ color: 'red' }}>.NET</strong>,{' '}
                <strong style={{ color: 'red' }}>Java</strong>,{' '}
                <strong style={{ color: 'red' }}>Kotlin</strong>,{' '}
                <strong style={{ color: 'red' }}>PHP</strong>,{' '}
                
                <strong style={{ color: 'blue' }}>HTML</strong>,{' '}
                <strong style={{ color: 'blue' }}>CSS</strong>,{' '}
                <strong style={{ color: 'yellow' }}>JavaScript</strong>,{' '}
                <strong style={{ color: 'yellow' }}>React</strong>,{' '}
                
                <strong style={{ color: 'green' }}>SQL</strong>,{' '}
                <strong style={{ color: 'green' }}>MySQL</strong>,{' '}
                <strong style={{ color: 'green' }}>SQL Server</strong>,{' '}
                <strong style={{ color: 'green' }}>Firebase</strong>,{' '}
                
                and experienced in{' '}
                <strong>REST APIs</strong>,{' '}
                <strong>Docker</strong>,{' '}
                <strong>Linux</strong>,{' '}
                <strong>Git</strong>,{' '}
                <strong>MVVM</strong>, and{' '}
                <strong>Domain-Driven Design</strong>.
            </p>

            {/* Buttons */}
            <div className="button-group">
                
                <a 
                    href="https://github.com/Sekomane" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <button className="github-button">
                        View My GitHub
                    </button>
                </a>

                <a 
                    href={`${process.env.PUBLIC_URL}/RorisangSekomane_Resume.pdf`} 
                    download
                >
                    <button className="resume-button">
                        Download CV
                    </button>
                </a>

            </div>
        </div>
    );
};

export default Home;
