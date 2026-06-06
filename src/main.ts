import "./style.css";

const app = document.querySelector<HTMLElement>("#app");

if (app) {
  app.innerHTML = `
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
          <img src="/assets/arx-hero.png" alt="Abstract arx monogram artwork" />
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
