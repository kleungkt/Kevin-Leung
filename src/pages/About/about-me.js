import React from "react";
import './about-me.scss';
function About() {
    return (
      <div className="about-page">
        <div className="about-me">
        <div className="content">
          <h1>About Me</h1>
          <p>I am an <strong>AI Engineer and AI Consultant</strong> with triple majors in Data Science, Computer Science, and Applied Mathematics from HKUST.</p>
          <p>I specialize in building <strong>production AI systems</strong> powered by large language models (LLMs), retrieval-augmented generation (RAG) pipelines, intelligent agents, and AI-driven automation. My work spans the full stack of AI engineering — from model selection, prompt engineering, and fine-tuning to production deployment, monitoring, and scaling.</p>
          <p>With deep expertise in <strong>machine learning, natural language processing, and software engineering</strong>, I design and ship AI systems that solve real-world problems at scale. I work extensively with LLMs (GPT-4, Claude, open-source models), frameworks like LangChain and LlamaIndex, vector databases, and modern MLOps tooling to build reliable, production-grade AI applications.</p>
          <p>As a founder, I built Hong Kong's first auto-saving app and received backing from Cyberport Hong Kong, combining entrepreneurial drive with technical execution.</p>
          <p><strong>I am available for AI consulting engagements</strong> — helping teams design, build, and ship AI-powered systems. Whether you need to build an intelligent agent, implement a RAG pipeline over your knowledge base, or integrate LLMs into your existing products, I can help from architecture design through to production deployment.</p>
          <p>I have been recognized with more than 11 scholarships and awards covering full tuition, and I am committed to advancing the field of AI engineering and contributing to the broader tech community.</p>
          <p>Outside of engineering, I am an avid debater and served as Captain of the Cantonese Debating Team at HKUST.</p>
        </div>
      </div>
    </div>
    )
}
export default About;
