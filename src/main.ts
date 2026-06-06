import "./style.css";

const app = document.querySelector<HTMLElement>("#app");

if (app) {
  app.innerHTML = `
    <a
      class="github-corner"
      href="https://github.com/arturious/arx"
      target="_blank"
      rel="noreferrer"
      aria-label="View source on GitHub"
    >
      <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
        <path d="M0 0l115 115h15l12 27 108 108V0z" />
        <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
        <path
          class="octo-body"
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
        />
      </svg>
    </a>

    <header class="site-header">
      <a class="brand" href="#top" aria-label="arx home">
        <span class="brand-mark">a</span>
        <span>arx</span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#stack">Stack</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">Personal website</p>
          <h1 id="hero-title">arx builds focused digital things.</h1>
          <p class="hero-text">
            A small, fast home on the web for projects, experiments, and notes
            about software that feels precise, useful, and a little cinematic.
          </p>
          <div class="hero-actions" aria-label="Primary actions">
            <a class="button button-primary" href="#work">View work</a>
            <a class="button button-secondary" href="#contact">Get in touch</a>
          </div>
        </div>

        <figure class="hero-visual">
          <img src="./assets/arx-hero.png" alt="Abstract arx monogram artwork" />
        </figure>
      </section>

      <section class="section" id="work" aria-labelledby="work-title">
        <div class="section-heading">
          <p class="eyebrow">Work</p>
          <h2 id="work-title">Projects in progress.</h2>
        </div>
        <div class="project-grid">
          <article class="project-card">
            <span class="project-index">01</span>
            <h3>Personal site</h3>
            <p>
              A fast TypeScript website deployed through GitHub Pages and wired
              to the custom domain arx.is-a.dev.
            </p>
          </article>
          <article class="project-card">
            <span class="project-index">02</span>
            <h3>Experiments</h3>
            <p>
              Small builds, interface studies, and technical sketches collected
              as the site grows.
            </p>
          </article>
          <article class="project-card">
            <span class="project-index">03</span>
            <h3>Notes</h3>
            <p>
              Short writing about code, systems, and the decisions behind
              finished work.
            </p>
          </article>
        </div>
      </section>

      <section class="section split-section" id="stack" aria-labelledby="stack-title">
        <div class="section-heading">
          <p class="eyebrow">Stack</p>
          <h2 id="stack-title">Built light, kept sharp.</h2>
        </div>
        <ul class="stack-list" aria-label="Technology stack">
          <li>TypeScript</li>
          <li>Vite</li>
          <li>GitHub Pages</li>
          <li>is-a.dev</li>
        </ul>
      </section>

      <section class="contact-section" id="contact" aria-labelledby="contact-title">
        <div>
          <p class="eyebrow">Contact</p>
          <h2 id="contact-title">Say hello.</h2>
        </div>
        <div class="contact-links">
          <a href="https://github.com/arturious" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://arx.is-a.dev">arx.is-a.dev</a>
        </div>
      </section>
    </main>
  `;

}
