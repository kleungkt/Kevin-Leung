function Blog() {
    return (
        <div className="blog" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', padding: '2rem' }}>
            <h1>Coming Soon</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.1rem', color: '#aaa' }}>
                I'm working on sharing my thoughts on AI engineering, LLMs, and intelligent systems.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
                In the meantime, check out my{' '}
                <a href="https://techplanet.notion.site/Tech-knowledge-hub-by-Kevin-Leung-a7de1567d5a246aab8805013a767ee8c?pvs=74" target="_blank" rel="noreferrer" style={{ color: '#66add3' }}>
                    learning notes on Notion
                </a>.
            </p>
        </div>
    )
}

export default Blog