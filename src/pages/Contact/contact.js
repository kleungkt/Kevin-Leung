import './contact.scss';

function Contact() {
    return (
        <div className="contact">
            <div className="contact-content">
                <h1>Get In Touch</h1>
                <p className="contact-tagline">Interested in working together? Let's connect.</p>
                <p className="contact-description">
                    I'm always open to discussing AI engineering, data infrastructure, 
                    consulting engagements, or potential collaborations.
                </p>
                <div className="contact-links">
                    <a href="mailto:kevin.leung.tech@gmail.com" className="contact-link">
                        <span className="contact-icon">📧</span>
                        <span>kevin.leung.tech@gmail.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/kleungkt/" target="_blank" rel="noreferrer" className="contact-link">
                        <span className="contact-icon">💼</span>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/kleungkt" target="_blank" rel="noreferrer" className="contact-link">
                        <span className="contact-icon">🐙</span>
                        <span>GitHub</span>
                    </a>
                </div>
                <div className="contact-note">
                    <p>Available for AI consulting, engineering roles, and speaking engagements.</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
