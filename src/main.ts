import './style.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { CAT_FRAMES } from './catFrames'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
// import { Projects } from './components/Projects'
import { fetchContributions } from './services/github'
import BadgeReact from './components/BadgeReact'
import Dither from './components/Dither'

const app = document.querySelector<HTMLElement>('#app')

if (app) {
  app.innerHTML = /*html*/ `
    ${Header()}
    <div class="badge-3d-wrapper" id="badge-3d-container"></div>
    <main class="site-main">
      ${Hero()}
      <!-- \${Projects()} -->
    </main>
  `

  // Animated cat logic
  const milkshakeCat = document.querySelector<HTMLElement>('.milkshake-cat')
  if (milkshakeCat) {
    const renderCat = () => {
      const frame = CAT_FRAMES[Math.floor(Date.now() / 930) % CAT_FRAMES.length]
      milkshakeCat.textContent = frame.join('\n')
    }
    renderCat()
    window.setInterval(renderCat, 930)
  }

  // Load GitHub contributions for username 'arturious'
  fetchContributions('arturious')

  // Initialize React 3D Badge
  const badgeContainer = document.getElementById('badge-3d-container')
  if (badgeContainer) {
    try {
      const root = createRoot(badgeContainer)
      root.render(React.createElement(BadgeReact))
    } catch (err) {
      console.error('Failed to load React 3D badge:', err)
    }
  }

  // Initialize React Dither Background
  const ditherContainer = document.getElementById('dither-bg-container')
  if (ditherContainer) {
    try {
      const root = createRoot(ditherContainer)
      root.render(
        React.createElement(Dither, {
          waveColor: [0.30980392156862746, 0.30980392156862746, 0.30980392156862746],
          disableAnimation: false,
          enableMouseInteraction: false,
          mouseRadius: 0.3,
          colorNum: 4,
          pixelSize: 2,
          waveAmplitude: 0.3,
          waveFrequency: 3,
          waveSpeed: 0.05,
        })
      )
    } catch (err) {
      console.error('Failed to load React Dither Background:', err)
    }
  }
}
