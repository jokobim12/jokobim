import { FaGithub, FaGamepad, FaCodeBranch, FaTerminal } from 'react-icons/fa';
import Lanyard from './Lanyard';
import './Hero.css';

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="container hero-content">
                <div className="hero-text">
                    <div className="hero-readme-header font-mono">
                        <FaTerminal className="terminal-icon" />
                        <span>README.md</span>
                    </div>
                    
                    <p className="hero-greeting font-mono">
                        Hello World, I'm
                    </p>

                    <h1 className="hero-name">
                        Joko <span>Bimantaro</span>
                    </h1>

                    <div className="hero-handle-badge font-mono">
                        <span>@jokobim12</span>
                        <span className="dot-divider">•</span>
                        <span>D3 TI Politala '24</span>
                    </div>

                    <p className="hero-role">
                        Software Developer & Information Technology Student at Politeknik Negeri Tanah Laut.
                        Passionate in Full-Stack Web Development, Interactive UI & Game Dev.
                    </p>

                    <div className="hero-tags font-mono">
                        <span className="hero-tag"><span className="tag-dot php"></span> PHP / Laravel</span>
                        <span className="hero-tag"><span className="tag-dot react"></span> React / JS</span>
                        <span className="hero-tag"><span className="tag-dot mysql"></span> MySQL</span>
                        <span className="hero-tag"><span className="tag-dot tailwind"></span> Tailwind</span>
                    </div>

                    <div className="hero-buttons">
                        <a
                            href="https://github.com/jokobim12"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                        >
                            <FaGithub /> Follow @jokobim12
                        </a>
                        <a href="#portfolio" className="btn btn-secondary">
                            <FaCodeBranch /> View Repositories
                        </a>
                        <a
                            href="https://niskala-masa.vercel.app/"
                            className="btn btn-outline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaGamepad /> Play Niskala Masa
                        </a>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="lanyard-container-card">
                        <div className="lanyard-card-header font-mono">
                            <span className="lanyard-dot red"></span>
                            <span className="lanyard-dot yellow"></span>
                            <span className="lanyard-dot green"></span>
                            <span className="lanyard-card-title">Interactive ID Badge</span>
                        </div>
                        <Lanyard />
                        <div className="lanyard-hint font-mono">
                            💡 Drag badge to interact with physics
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
