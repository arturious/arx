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
        <path
          class="octo-arm"
          d="M128.3 109c-15.1-9.8-9.3-23.8-9.3-23.8 3.4-7.8 1.6-12.6 1.6-12.6-2.7-6.2 1-9.3 1-9.3 5.7-3.9 11.2 4.7 11.2 4.7 5 8.5 2.7 15.6 2.7 15.6-1.7 7.1 5.4 13.1 10.7 16.5"
        />
        <path
          class="octo-body"
          d="M115 115c-0.1 0.1 3.7 1.5 4.8 0.4l13.9-13.8c3.2-2.4 6.2-3.2 8.5-3-8.4-10.6-14.7-24.2 1.6-40.6 4.7-4.6 10.2-6.8 15.9-7 0.6-1.6 3.5-7.4 11.7-10.9 0 0 4.7 2.4 7.4 16.1 4.3 2.4 8.4 5.6 12.1 9.2 3.6 3.6 6.8 7.8 9.2 12.2 13.7 2.6 16.2 7.3 16.2 7.3-3.6 8.2-9.4 11.1-10.9 11.7-0.3 5.8-2.4 11.2-7.1 15.9-16.4 16.4-30 10-40.6 1.6 0.2 2.8-1 6.8-5 10.8l-11.7 11.6c-1.2 1.2 0.6 5.4 0.8 5.3z"
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
