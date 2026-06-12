export default function Info() {
  return (
    <section className="info">
      <h2 className="info--name">Birgit Leitner</h2>
      <p className="info--job-title">Frontend Developer</p>
      <a href="https://github.com/Ballastt" className="info--website">Meine nicht vorhandene Website</a>

      <div className="button-container">
        <a href="mailto:birgit.leitner@yahoo.de">
          <button className="btn-email">
            <i className="fa-solid fa-envelope"></i> Email
          </button>
        </a>
        
        <a href="https://www.linkedin.com/in/birgit-leitner-9a0a28347/" target="_blank" rel="noopener noreferrer">
          <button className="btn-linkedin">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
          </button>
        </a>
      </div>
    </section>
  )
}