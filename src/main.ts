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
      <svg width="96" height="96" viewBox="0 0 250 250" aria-hidden="true">
        <path class="github-corner-bg" d="M0 0h250v250z" />
        <path
          class="github-corner-arm"
          d="M128.3 109c-15.1-9.8-9.3-23.8-9.3-23.8 3.4-7.8 1.6-12.6 1.6-12.6-2.7-6.2 1-9.3 1-9.3 5.7-3.9 11.2 4.7 11.2 4.7 5 8.5 2.7 15.6 2.7 15.6-1.7 7.1 5.4 13.1 10.7 16.5"
        />
        <path
          class="github-corner-body"
          d="M115 115.4c-6.8 0-12.8 1.1-17.9 3.1-3.8-7.6-11.8-12.8-11.8-12.8-6.5-4.2-5.6-9.1-5.6-9.1 4.8 1.2 7.4 5.8 7.4 5.8 4.3 7.3 11.2 5.2 14 4 0.4-3.1 1.7-5.2 3-6.4-10.9-1.2-22.4-5.4-22.4-24.2 0-5.3 1.9-9.7 5.1-13.1-0.5-1.2-2.2-6.2 0.5-12.9 0 0 4.1-1.3 13.5 5 3.9-1.1 8.1-1.6 12.3-1.6s8.4 0.6 12.3 1.6c9.4-6.4 13.5-5 13.5-5 2.7 6.7 1 11.7 0.5 12.9 3.2 3.4 5.1 7.8 5.1 13.1 0 18.8-11.5 22.9-22.4 24.1 1.7 1.5 3.3 4.5 3.3 9.1v13.5"
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

  const githubCorner = app.querySelector<HTMLAnchorElement>(".github-corner");

  githubCorner?.addEventListener("pointerenter", () => {
    githubCorner.classList.remove("is-waving");
    window.requestAnimationFrame(() => {
      githubCorner.classList.add("is-waving");
    });
  });

  githubCorner?.addEventListener("animationend", () => {
    githubCorner.classList.remove("is-waving");
  });
}
