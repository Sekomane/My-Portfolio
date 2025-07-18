import React from 'react';
import '../styles/Home.css';
import profilePic from '../assets/Profile-removebg-preview.png';

const Home = () => {
    return (
        <div className="home-container">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <img src={profilePic} alt="Rorisang Sekomane" className="profile-img" />
            <h1 className="gradient-name">Rorisang Sekomane</h1>

            <p className="intro">
                Final-year Computer Science student from Tswane University of Technology, passionate about building clean and functional software. Skilled in{' '}
                <strong style={{ color: 'red' }}>Java</strong>,{' '}
                <strong style={{ color: 'red' }}>PHP</strong>,{' '}
                <strong style={{ color: 'blue' }}>HTML</strong>,{' '}
                <strong style={{ color: 'blue' }}>CSS</strong>,{' '}
                <strong style={{ color: 'yellow' }}>React</strong>,{' '}
                <strong style={{ color: 'yellow' }}>JavaScript</strong>, and modern web technologies.
            </p>
            <div className="button-group">
                <a href="https://github.com/Sekomane" target="_blank" rel="noopener noreferrer">
                    <button className="github-button">View My GitHub</button>
                </a>
                <a href={`${process.env.PUBLIC_URL}/RorisangSekomane_Resume.pdf`} download>
                    <button className="resume-button">Download CV</button>
                </a>


            </div>
        </div>


    );
};

export default Home;
