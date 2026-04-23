import Navbar from './Navbar'
import './App.css'

const skills = [
  { name: 'Ruby on Rails', icon: '💎', level: 'Expert' },
  { name: 'Microservices', icon: '⚙️', level: 'Expert' },
  { name: 'AWS S3', icon: '☁️', level: 'Advanced' },
  { name: 'Twilio', icon: '📞', level: 'Advanced' },
  { name: 'Stripe', icon: '💳', level: 'Advanced' },
  { name: 'RPush', icon: '🔔', level: 'Advanced' },
  { name: 'Docker', icon: '🐳', level: 'Advanced' },
  { name: 'PostgreSQL', icon: '🗄️', level: 'Advanced' },
  { name: 'Redis', icon: '⚡', level: 'Intermediate' },
  { name: 'REST APIs', icon: '🔌', level: 'Expert' },
  { name: 'Git', icon: '🌿', level: 'Advanced' },
  { name: 'Linux', icon: '🐧', level: 'Advanced' },
]

const projects = [
  {
    title: 'Microservices Architecture',
    icon: '⚙️',
    tags: ['Ruby', 'Rails', 'REST', 'Docker'],
    desc: 'Designed and built a production microservices system with independent Ruby on Rails services communicating over REST APIs. Each service owned its own database, deployed in isolated Docker containers for zero-downtime scaling.',
    highlights: ['Service isolation & independent deployments', 'Inter-service REST communication', 'Centralized API gateway routing', 'Health checks & graceful shutdowns'],
  },
  {
    title: 'AWS S3 Image Storage',
    icon: '☁️',
    tags: ['AWS S3', 'Ruby', 'Active Storage', 'CDN'],
    desc: 'Integrated AWS S3 for scalable media storage across multiple services. Implemented direct upload flows, presigned URL generation, and CDN-backed delivery to reduce server load and improve response times.',
    highlights: ['Presigned URL direct uploads', 'CDN-backed asset delivery', 'Image variant processing', 'Lifecycle policies for cost optimization'],
  },
  {
    title: 'Twilio Communication Suite',
    icon: '📞',
    tags: ['Twilio', 'SMS', 'Voice', 'Ruby'],
    desc: 'Built a full communication layer using Twilio — including SMS notifications, voice call routing, and programmable call flows using TwiML. Handled webhook callbacks and call state management.',
    highlights: ['Outbound SMS & voice calls', 'TwiML call flow programming', 'Webhook event handling', 'Call recording & transcription'],
  },
  {
    title: 'Stripe Payment Integration',
    icon: '💳',
    tags: ['Stripe', 'Webhooks', 'Ruby', 'Subscriptions'],
    desc: 'Implemented end-to-end payment processing with Stripe — including one-time charges, recurring subscriptions, refunds, and webhook-driven state updates. PCI-compliant with Stripe Elements for frontend.',
    highlights: ['One-time & subscription payments', 'Stripe webhook event handling', 'Refunds & partial captures', 'Invoice & receipt generation'],
  },
  {
    title: 'RPush Push Notification & Call Flow',
    icon: '🔔',
    tags: ['RPush', 'APNS', 'FCM', 'Ruby'],
    desc: 'Integrated RPush for cross-platform push notification delivery to iOS (APNs) and Android (FCM). Built call flow triggers that fire push alerts at specific call lifecycle events, bridging telephony and mobile notifications.',
    highlights: ['iOS APNs & Android FCM delivery', 'Call-event triggered notifications', 'Retry logic & failure handling', 'Notification payload templating'],
  },
  {
    title: 'Docker Multi-Service Deployment',
    icon: '🐳',
    tags: ['Docker', 'Docker Compose', 'CI/CD', 'Linux'],
    desc: 'Containerized all microservices with Docker and orchestrated multi-service deployments using Docker Compose. Built reproducible environments across dev, staging, and production with environment-specific config injection.',
    highlights: ['Multi-stage Dockerfiles', 'Docker Compose orchestration', 'Environment config management', 'Health checks & auto-restart policies'],
  },
]

const experience = [
  {
    role: 'Backend Ruby Developer',
    company: 'Full-Stack Product Engineering',
    period: '2022 – Present',
    points: [
      'Architected microservices platform in Ruby on Rails with Docker-based deployments',
      'Integrated AWS S3 for image and media storage with presigned URL workflows',
      'Built Twilio-powered voice call flows and SMS notification pipelines',
      'Implemented Stripe payment processing — charges, subscriptions, and webhook handlers',
      'Deployed RPush for real-time push notifications tied to call lifecycle events',
      'Maintained CI/CD pipelines deploying containerized services to production',
    ],
  },
]

export default function App() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">Backend Ruby Developer</div>
          <h1 className="hero-name">Prathish V</h1>
          <p className="hero-sub">
            Building scalable backend systems with Ruby on Rails —&nbsp;
            microservices, cloud integrations, payment pipelines, and real-time communication.
          </p>
          <div className="hero-tech-row">
            {['Ruby', 'AWS', 'Twilio', 'Stripe', 'RPush', 'Docker'].map((t) => (
              <span key={t} className="hero-tag">{t}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              View My Work
            </a>
            <a href="#contact" className="btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-card">
            <div className="code-header">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="code-filename">services/payment.rb</span>
            </div>
            <pre className="code-body">{`class PaymentService
  def charge(user, amount)
    Stripe::Charge.create(
      amount:   amount,
      currency: "usd",
      customer: user.stripe_id
    )
  end

  def upload_receipt(charge)
    S3Uploader.put(
      charge.receipt_url
    )
  end
end`}</pre>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="section-inner">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a backend developer specializing in <strong>Ruby on Rails</strong> with hands-on experience
                building production-grade microservices. I architect systems that handle real money,
                real calls, and real users — with a focus on reliability and clean API design.
              </p>
              <p>
                My work spans payment processing with <strong>Stripe</strong>, cloud media storage
                via <strong>AWS S3</strong>, communication pipelines through <strong>Twilio</strong>,
                push notification delivery with <strong>RPush</strong>, and containerized deployments
                on <strong>Docker</strong>.
              </p>
              <p>
                I care about writing backend code that is maintainable, observable, and production-ready
                from day one.
              </p>
            </div>
            <div className="about-stats">
              {[
                { num: '6+', label: 'Integrations Shipped' },
                { num: '100%', label: 'Docker Deployed' },
                { num: 'AWS', label: 'Cloud Storage' },
                { num: 'PCI', label: 'Stripe Compliant' },
              ].map(({ num, label }) => (
                <div key={label} className="stat-card">
                  <span className="stat-num">{num}</span>
                  <span className="stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section section-alt">
        <div className="section-inner">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map(({ name, icon, level }) => (
              <div key={name} className="skill-card">
                <span className="skill-icon">{icon}</span>
                <span className="skill-name">{name}</span>
                <span className={`skill-level level-${level.toLowerCase()}`}>{level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="section-inner">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            {experience.map(({ role, company, period, points }) => (
              <div key={role} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-role">{role}</h3>
                      <p className="timeline-company">{company}</p>
                    </div>
                    <span className="timeline-period">{period}</span>
                  </div>
                  <ul className="timeline-points">
                    {points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section section-alt">
        <div className="section-inner">
          <h2 className="section-title">Projects & Integrations</h2>
          <div className="projects-grid">
            {projects.map(({ title, icon, tags, desc, highlights }) => (
              <div key={title} className="project-card">
                <div className="project-header">
                  <span className="project-icon">{icon}</span>
                  <h3 className="project-title">{title}</h3>
                </div>
                <div className="project-tags">
                  {tags.map((t) => <span key={t} className="project-tag">{t}</span>)}
                </div>
                <p className="project-desc">{desc}</p>
                <ul className="project-highlights">
                  {highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="section-inner contact-inner">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-sub">
            Open to backend Ruby roles, freelance integrations, and interesting engineering problems.
          </p>
          <div className="contact-cards">
            <a href="mailto:prathish.v@greenbotz.co" className="contact-card">
              <span className="contact-icon">✉️</span>
              <span className="contact-label">Email</span>
              <span className="contact-value">prathish.v@greenbotz.co</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-icon">💼</span>
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">Connect with me</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-card">
              <span className="contact-icon">🐙</span>
              <span className="contact-label">GitHub</span>
              <span className="contact-value">View repositories</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Built with React &amp; Vite &nbsp;·&nbsp; Prathish V &nbsp;·&nbsp; {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}
