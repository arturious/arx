import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const wakatimeUrl = 'https://wakatime.com/badge/user/018ea8ef-ec19-40f1-b747-cf0c760dadab.svg'
const outputPath = path.resolve(__dirname, '../src/wakatime-fallback.json')

async function fetchStats() {
  console.log('Fetching WakaTime stats...')
  try {
    const res = await fetch(wakatimeUrl, { signal: AbortSignal.timeout(5000) })
    if (!res.ok) throw new Error(`HTTP error ${res.status}`)
    const svg = await res.text()

    // Extract last <text> element content
    const matches = [...svg.matchAll(/<text[^>]*>([^<]+)<\/text>/g)]
    if (matches.length > 0) {
      const hours = matches[matches.length - 1][1].trim()
      fs.writeFileSync(outputPath, JSON.stringify({ hours }, null, 2))
      console.log(`Successfully saved WakaTime stats: ${hours}`)
      return
    }
    throw new Error('Could not find text element in SVG')
  } catch (err) {
    console.warn('Failed to fetch WakaTime stats, using default/existing fallback:', err.message)
    if (!fs.existsSync(outputPath)) {
      fs.writeFileSync(outputPath, JSON.stringify({ hours: '117 hrs' }, null, 2))
    }
  }
}

fetchStats()
