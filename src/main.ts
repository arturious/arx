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
import DecryptedText from './components/DecryptedText'

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

  // WakaTime stats loader
  const wakatimeHours = document.querySelector<HTMLElement>('.wakatime-hours')
  if (wakatimeHours) {
    // 1. Load build-time fallback immediately
    import('./wakatime-fallback.json').then(fallback => {
      wakatimeHours.textContent = fallback.hours
    })

    // 2. Try fetching live stats via CORS proxies (Attempt 1: corsproxy.io, Attempt 2: allorigins.win)
    const wakatimeUrl = 'https://wakatime.com/badge/user/018ea8ef-ec19-40f1-b747-cf0c760dadab.svg'

    const parseSvgAndSetHours = (svg: string): boolean => {
      const matches = [...svg.matchAll(/<text[^>]*>([^<]+)<\/text>/g)]
      if (matches.length > 0) {
        const hours = matches[matches.length - 1][1].trim()
        wakatimeHours.textContent = hours
        return true
      }
      return false
    }

    fetch(`https://corsproxy.io/?url=${encodeURIComponent(wakatimeUrl)}`)
      .then(res => {
        if (!res.ok) throw new Error()
        return res.text()
      })
      .then(svg => {
        if (!parseSvgAndSetHours(svg)) throw new Error()
      })
      .catch(() => {
        fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(wakatimeUrl)}`)
          .then(res => {
            if (!res.ok) throw new Error()
            return res.json()
          })
          .then(data => {
            parseSvgAndSetHours(data.contents)
          })
          .catch(() => {
            // Fail silently, fallback is already displayed
          })
      })
  }

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

  // Initialize React DecryptedText
  const decryptedTextContainer = document.getElementById('decrypted-text-container')
  if (decryptedTextContainer) {
    try {
      const root = createRoot(decryptedTextContainer)
      root.render(
        React.createElement(DecryptedText, {
          text: 'hello world!',
          animateOn: 'both',
          revealDirection: 'start',
          sequential: true,
          useOriginalCharsOnly: false,
          speed: 70,
          className:
            'font-mono text-[16px] text-[#888888] bg-black rounded-md uppercase tracking-[0.08em]',
          encryptedClassName:
            'font-mono text-[16px] text-[#888888] bg-black rounded-md uppercase tracking-[0.08em]',
          parentClassName: 'inline-block select-none',
        })
      )
    } catch (err) {
      console.error('Failed to load DecryptedText:', err)
    }
  }

  // Programmatic staggered shimmer/hover trigger for navbar buttons
  const navbarButtons = document.querySelectorAll<HTMLElement>('.btn-4')
  if (navbarButtons.length > 0) {
    let isReverse = false

    const triggerNavbarShimmer = () => {
      const activeClass = isReverse ? 'shimmer-active-reverse' : 'shimmer-active'
      const len = navbarButtons.length

      navbarButtons.forEach((btn, index) => {
        // Stagger left-to-right (0, 1, 2) or right-to-left (2, 1, 0)
        const staggerIndex = isReverse ? len - 1 - index : index

        setTimeout(() => {
          btn.classList.add(activeClass)

          // Remove class after 800ms (enough for the 550ms shimmer to finish)
          setTimeout(() => {
            btn.classList.remove(activeClass)
          }, 800)
        }, staggerIndex * 200)
      })

      // Alternate the direction for the next cycle
      isReverse = !isReverse
    }

    // Trigger once shortly after page load/refresh (1.2s delay)
    setTimeout(triggerNavbarShimmer, 1200)

    // Trigger every 5 seconds
    setInterval(triggerNavbarShimmer, 5000)
  }
}
