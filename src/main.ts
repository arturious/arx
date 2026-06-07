import './style.css'

const html = (strings: TemplateStringsArray, ...values: any[]) =>
  strings.reduce((acc, s, i) => acc + s + (values[i] ?? ''), '')

const CAT_FRAMES = [
  ['　　 ∧,,,∧', '　 （ ・ω・） I like milkshake!', '　　( つ旦O', '　　と＿)_)', '　　　　　'],
  ['　　 ∧,,,∧', '　 （ ・◎・） slrrrp', '　　(　ﾞノ ヾ', '　　と＿)_)', '　　　　　'],
  [
    '　　 ∧,,,∧',
    '　 （ ・ω・） Hmm, tastes like prion disease...',
    '　　( つ旦O',
    '　　と＿)_)',
    '　　　　　',
  ],
  [
    '　　 ∧,,,∧',
    '　 （ ・ω・）',
    '　　( つ　O. __',
    '　　と＿)_) （__(）､;.o：。',
    '　　　　　　　　　　ﾟ*･:.｡',
  ],
  [
    '　　　　　',
    '　 　　　 _ _　 ξ',
    '　　　 (´ 　 ｀ヽ、　　 　 __',
    '　　⊂,_と（　 　 ）⊃　 （__(）､;.o：。',
    '　　　　　　Ｖ　Ｖ　　　　　　 　 　 ﾟ*･:.｡',
  ],
]

const app = document.querySelector<HTMLElement>('#app')

if (app) {
  app.innerHTML = html`
    <header class="site-header">
      <a class="brand" href="#top" aria-label="arx home">
        <span class="brand-logo" aria-hidden="true">
          <svg
            role="img"
            aria-label="ark handwritten mark"
            xmlns="http://www.w3.org/2000/svg"
            width="2566"
            height="1630"
            viewBox="520 490 1520 520"
            version="1.1"
          >
            <path
              class="brand-logo-path"
              d="M 1727.500 535.817 C 1718.053 540.267, 1577.170 656.015, 1527.312 700.289 L 1525.124 702.232 1523.496 698.366 C 1521.020 692.488, 1516.284 675.601, 1513.987 664.459 C 1510.591 647.986, 1508.985 634.484, 1508.092 614.920 C 1507.164 594.581, 1506.069 590.269, 1500.397 584.610 C 1492.222 576.454, 1478.254 577.252, 1470.284 586.330 C 1465.353 591.946, 1464.657 596.121, 1465.419 615.500 C 1466.124 633.435, 1467.713 647.892, 1471.105 667.229 L 1473.162 678.959 1466.872 686.729 C 1422.740 741.244, 1375.652 779.692, 1319.097 807.388 C 1287.109 823.053, 1257.327 831.318, 1232.500 831.420 C 1217.967 831.480, 1211.776 830.309, 1202.228 825.693 C 1179.524 814.717, 1173.938 785.813, 1185.579 739.543 C 1186.957 734.067, 1190.315 722.783, 1193.042 714.468 C 1196.147 705, 1198 697.587, 1198 694.635 C 1198 688.700, 1195.267 683.240, 1190.070 678.792 C 1186.406 675.656, 1184.576 675.059, 1168.285 671.684 C 1158.503 669.658, 1148.846 667.539, 1146.824 666.974 L 1143.148 665.947 1147.544 657.683 C 1164.715 625.406, 1166.981 599.698, 1153.905 585.513 C 1149.758 581.014, 1141.844 576.664, 1134.885 575.060 C 1123.344 572.399, 1107.923 574.950, 1093.306 581.937 C 1077.814 589.343, 1066.288 600.097, 1059.827 613.174 C 1055.089 622.763, 1053.771 627.894, 1053.707 637 C 1053.617 649.645, 1058.558 660.656, 1069.929 673.152 L 1075.982 679.804 1068.241 686.722 C 1015.064 734.247, 940.932 771.805, 875.500 784.373 C 860.190 787.314, 848.049 788.274, 833.171 787.722 C 811.376 786.913, 800.184 783.180, 791.399 773.789 C 782.290 764.050, 779.477 753.688, 780.326 733 C 781.208 711.501, 785.769 693.554, 800.060 655.352 C 804.411 643.721, 808.511 631.059, 809.170 627.215 C 812.909 605.412, 797.737 592.801, 778.621 601.820 C 771.706 605.083, 763.853 611.799, 751.889 624.680 C 747.384 629.531, 742.896 634.358, 741.915 635.406 C 740.173 637.268, 739.998 637.197, 734.316 632.306 C 716.270 616.773, 700.794 610, 683.346 610 C 657.555 610, 633.049 626.035, 610.290 657.804 C 584.990 693.119, 572.262 743.669, 581.601 771.741 C 584.126 779.332, 589.591 788.398, 594.095 792.467 C 609.183 806.098, 630.830 803.240, 659.089 783.884 C 674.307 773.461, 706.366 742.314, 732.023 713.023 L 740.324 703.547 739.674 708.023 C 734.969 740.399, 737.217 763.372, 747.058 783.492 C 759.669 809.277, 781.290 824.410, 812.635 829.394 C 826.901 831.662, 851.015 831.503, 867.818 829.031 C 893.030 825.322, 927.457 815.532, 957.659 803.483 C 972.884 797.409, 1007.943 780.243, 1024 771.001 C 1052.206 754.766, 1082.941 732.345, 1101.500 714.465 C 1105.900 710.226, 1111.268 705.780, 1113.428 704.586 L 1117.356 702.415 1130.331 706.207 C 1137.467 708.293, 1144.024 710.007, 1144.903 710.015 C 1149.217 710.057, 1149.265 711.154, 1145.611 726.100 C 1139.436 751.358, 1138.610 757.612, 1138.552 779.500 C 1138.482 806.465, 1141.174 819.198, 1150.175 834.464 C 1155.703 843.841, 1169.515 857.580, 1178.333 862.473 C 1186.865 867.208, 1199.939 871.455, 1210.892 873.050 C 1227.156 875.418, 1255.370 873.327, 1276.500 868.188 C 1326.075 856.131, 1382.580 825.401, 1432.939 783.107 C 1445.455 772.596, 1470.672 748.060, 1481.756 735.610 C 1488.634 727.884, 1488.806 727.768, 1490.019 730.036 C 1491.195 732.233, 1490.464 733.101, 1475.880 746.840 C 1400.655 817.699, 1353.697 873.273, 1338.122 909.874 C 1331.639 925.108, 1329.990 939.668, 1333.778 948.230 C 1335.773 952.741, 1341.566 958.504, 1345.676 960.067 C 1349.395 961.481, 1356.619 961.186, 1360.782 959.449 C 1364.707 957.812, 1370.423 952.857, 1372.257 949.500 C 1374.104 946.120, 1374.802 940.066, 1373.839 935.779 C 1369.338 915.747, 1402.944 871.053, 1471 806.563 C 1483.925 794.315, 1498.498 780.684, 1503.384 776.272 L 1512.267 768.250 1516.762 773.875 C 1540.654 803.774, 1576.650 827.250, 1615 837.944 C 1638.461 844.486, 1657.944 847.118, 1683 847.131 C 1732.460 847.155, 1786.645 833.286, 1838.303 807.381 C 1884.955 783.986, 1932.901 752.628, 1971.827 720.054 C 1978.247 714.681, 1984.491 709.203, 1985.702 707.879 C 1991.124 701.954, 1992.423 692.735, 1988.923 685.018 C 1986.393 679.440, 1984.460 677.273, 1980 675.016 C 1969.085 669.491, 1963.886 671.301, 1943.416 687.748 C 1892.090 728.989, 1831.909 766.403, 1790.500 782.812 C 1754.757 796.977, 1720.497 803.987, 1686.974 803.995 C 1659.537 804.002, 1640.499 801.187, 1618.696 793.898 C 1596.058 786.331, 1579.258 775.960, 1560.663 758.076 C 1552.283 750.015, 1544.455 740.114, 1545.630 739.060 C 1570.749 716.533, 1653.014 648.410, 1715.585 598.321 C 1734.882 582.873, 1751.619 569.029, 1752.778 567.555 C 1759.882 558.524, 1757.045 544.029, 1746.854 537.285 C 1741.523 533.757, 1733.212 533.127, 1727.500 535.817 M 1113.206 619.133 C 1105.825 622.940, 1099.055 629.479, 1097.326 634.473 C 1096.273 637.515, 1096.285 638.735, 1097.394 641.336 C 1098.699 644.398, 1103.627 649.775, 1104.346 648.921 C 1108.402 644.095, 1121.710 622.012, 1122.528 618.750 C 1123.105 616.448, 1122.896 616, 1121.249 616 C 1120.167 616, 1116.547 617.410, 1113.206 619.133 M 673.500 656.161 C 656.546 662.519, 634.328 693.093, 625.654 722 C 620.861 737.974, 618.707 754.408, 620.944 757.943 C 623.609 762.156, 670.937 718.519, 700.368 684.713 C 706.491 677.680, 711.640 671.521, 711.812 671.026 C 712.269 669.711, 701.354 661.367, 695.211 658.337 C 689.201 655.372, 678.472 654.296, 673.500 656.161"
              stroke="none"
              fill="currentColor"
              fill-rule="evenodd"
            />
          </svg>
        </span>
      </a>

      <nav class="nav-links" aria-label="Primary navigation">
        <a href="#projects">projects</a>
        <a href="#blog">blog</a>
        <a href="#contact">contact me</a>
      </nav>

      <div class="header-actions" aria-label="Profile links">
        <a
          class="status-badge wakatime-badge"
          href="https://wakatime.com/@018ea8ef-ec19-40f1-b747-cf0c760dadab"
          target="_blank"
          rel="noreferrer"
          aria-label="View WakaTime profile"
        >
          <img
            src="https://wakatime.com/badge/user/018ea8ef-ec19-40f1-b747-cf0c760dadab.svg"
            alt="wakatime"
          />
        </a>

        <a
          class="status-badge telegram-badge"
          href="https://t.me/feelinggodblessed"
          target="_blank"
          rel="noreferrer"
          aria-label="Open Telegram"
        >
          <img
            src="https://img.shields.io/badge/t.me-%2324292F?style=flat&logo=telegram&link=https%3A%2F%2Ft.me%2Ffeelinggodblessed"
            alt="Telegram"
          />
        </a>

        <a
          class="status-badge x-badge"
          href="https://x.com/arxfuck"
          target="_blank"
          rel="noreferrer"
          aria-label="Open @arxfuck on X"
        >
          <img
            src="https://img.shields.io/badge/x-%2324292F?style=flat&logo=x&link=https%3A%2F%2Fx.com%2Farxfuck"
            alt="X"
          />
        </a>

        <a
          class="status-badge github-followers"
          href="https://github.com/arturious?tab=followers"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow arturious on GitHub"
        >
          <img
            src="https://img.shields.io/github/followers/arturious?label=Followers&style=social"
            alt="GitHub followers"
          />
        </a>

        <a
          class="github-corner"
          href="https://github.com/arturious"
          target="_blank"
          rel="noreferrer"
          aria-label="View source on GitHub"
        >
          <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
            <path d="M0 0l115 115h15l12 27 108 108V0z" />
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              style="transform-origin: 130px 106px;"
              class="octo-arm"
            ></path>
            <path
              class="octo-body"
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            />
          </svg>
        </a>
      </div>
    </header>
    <main class="site-main">
      <section id="top" class="page-section hero-section" aria-label="Home">
        <pre class="milkshake-cat" aria-label="Animated milkshake cat"></pre>
      </section>

      <section id="projects" class="page-section projects-section" aria-labelledby="projects-title">
        <div class="projects-content">
          <h1 id="projects-title">projects</h1>
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
                  /> </a
              ></span>
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
                  /> </a
              ></span>
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
        </div>
      </section>
    </main>
  `

  const milkshakeCat = document.querySelector<HTMLElement>('.milkshake-cat')

  if (milkshakeCat) {
    const renderCat = () => {
      const frame = CAT_FRAMES[Math.floor(Date.now() / 930) % CAT_FRAMES.length]

      milkshakeCat.textContent = frame.join('\n')
    }

    renderCat()
    window.setInterval(renderCat, 930)
  }
}
