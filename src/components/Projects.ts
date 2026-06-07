export const Projects = (): string => {
  return `
    <section id="projects" class="page-section projects-section" aria-labelledby="projects-title">
      <div class="projects-content">
        <div class="projects-header-container">
          <pre class="projects-cat-sign" aria-hidden="true">
__________________________________
/\\                                 \\
\\_|                                |
  |            <span class="sign-text">PROJECTS</span>            |
  |                                |
  |   _____________________________|_
   \\_/_______________________________/</pre>
          <h1 id="projects-title" class="visually-hidden">projects</h1>
        </div>
        <div class="projects-grid">
          <div
            class="project-card"
            href="https://github.com/arturious/vscode-theme-solarized-kuro"
            target="_blank"
            rel="noreferrer"
            aria-label="Open vscode-theme-solarized-kuro project on GitHub"
          >
            <div class="project-heading">
              <svg
                class="project-icon"
                fill="#ffffff"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  ></path>
                </g>
              </svg>
              <span class="project-name">vscode-theme-solarized-kuro </span>
              <span class="project-visibility">Public</span>
            </div>
            <p>
              A clean dark AMOLED theme for Visual Studio Code based on Solarized Osaka (craftzdog)
              palette.
            </p>
            <div class="project-heading">
              <span class="project-bages">
                <a
                  class="status-badge github-repo-badge"
                  href="https://github.com/arturious/vscode-theme-solarized-kuro"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View vscode-theme-solarized-kuro repository on GitHub"
                >
                  <img
                    src="https://img.shields.io/badge/repo-vscode‐theme‐solarized‐kuro-blue?logo=github&labelColor=232429"
                    alt="GitHub vscode-theme-solarized-kuro repository"
                  />
                </a>
              </span>
              <span class="project-bages">
                <a
                  class="status-badge github-stars"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Star vscode-theme-solarized-kuro on GitHub"
                >
                  <img
                    src="https://img.shields.io/github/stars/arturious/vscode-theme-solarized-kuro?label=Stars&style=social&logo=github"
                    alt="GitHub repo stars"
                  />
                </a>
              </span>
              <a class="status-badge vscode-badge" aria-label="Visual Studio Code">
                <img
                  src="https://custom-icon-badges.demolab.com/badge/vscode-0078d7.svg?logo=visualstudiocode&logoColor=white"
                  alt="Visual Studio Code"
                />
              </a>
            </div>
          </div>

          <div
            class="project-card"
            href="https://github.com/arturious/kiyomemo"
            target="_blank"
            rel="noreferrer"
            aria-label="Open kiyomemo project on GitHub"
          >
            <div class="project-heading">
              <svg
                class="project-icon"
                fill="#ffffff"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  ></path>
                </g>
              </svg>
              <span class="project-name">kiyomemo</span>
              <span class="project-visibility">Public</span>
            </div>
            <p>
              kiyomemo is a lightweight native macOS menu bar utility for monitoring memory usage
              and clearing the file cache on demand.
            </p>
            <div class="project-heading">
              <span class="project-bages">
                <a
                  class="status-badge github-repo-badge"
                  href="https://github.com/arturious/kiyomemo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View kiyomemo repository on GitHub"
                >
                  <img
                    src="https://img.shields.io/badge/repo-kiyomemo-blue?logo=github&labelColor=232429"
                    alt="GitHub kiyomemo repository"
                  />
                </a>
              </span>
              <span class="project-bages">
                <a
                  class="status-badge github-stars"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Star kiyomemo on GitHub"
                >
                  <img
                    src="https://img.shields.io/github/stars/arturious/kiyomemo?label=Stars&style=social&logo=github"
                    alt="GitHub repo stars"
                  />
                </a>
              </span>
              <a class="status-badge macos-badge" aria-label="macOS">
                <img
                  src="https://img.shields.io/badge/macOS-232429?logo=apple&logoColor=F0F0F0"
                  alt="macOS"
                />
              </a>
            </div>
          </div>

          <div
            class="project-card"
            href="https://github.com/arturious/ctrlspace"
            target="_blank"
            rel="noreferrer"
            aria-label="Open ctrlspace project on GitHub"
          >
            <div class="project-heading">
              <svg
                class="project-icon"
                fill="#ffffff"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                  ></path>
                </g>
              </svg>
              <span class="project-name">ctrlspace</span>
              <span class="project-visibility">Public</span>
            </div>
            <p>A compact macOS notes app with search panel inspired by Spotlight/Raycast.</p>
            <div class="project-heading">
              <span class="project-bages">
                <a
                  class="status-badge github-repo-badge"
                  href="https://github.com/arturious/ctrlspace"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View ctrlspace repository on GitHub"
                >
                  <img
                    src="https://img.shields.io/badge/repo-ctrlspace-blue?logo=github&labelColor=232429"
                    alt="GitHub ctrlspace repository"
                  />
                </a>
              </span>
              <span class="project-bages">
                <a
                  class="status-badge github-stars"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Star ctrlspace on GitHub"
                >
                  <img
                    src="https://img.shields.io/github/stars/arturious/ctrlspace?label=Stars&style=social&logo=github"
                    alt="GitHub repo stars"
                  />
                </a>
              </span>
              <a class="status-badge macos-badge" aria-label="macOS">
                <img
                  src="https://img.shields.io/badge/macOS-232429?logo=apple&logoColor=F0F0F0"
                  alt="macOS"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
