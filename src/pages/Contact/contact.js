function Contact() {
    return (
        <div className="contact" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', padding: '2rem' }}>
            <h1>Get In Touch</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.1rem', color: '#aaa', textAlign: 'center', maxWidth: '600px' }}>
                I'm always open to discussing AI engineering, data infrastructure, or potential collaborations.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                <a href="mailto:kevin.leung.tech@gmail.com" style={{ color: '#66add3', fontSize: '1.1rem', textDecoration: 'none' }}>
                    📧 kevin.leung.tech@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/kleungkt/" target="_blank" rel="noreferrer" style={{ color: '#66add3', fontSize: '1.1rem', textDecoration: 'none' }}>
                    💼 LinkedIn
                </a>
                <a href="https://github.com/kleungkt" target="_blank" rel="noreferrer" style={{ color: '#66add3', fontSize: '1.1rem', textDecoration: 'none' }}>
                    🐙 GitHub
                </a>
            </div>
        </div>
    )
}

export default Contact