import type { ContributionsData } from '../types'

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

const renderContributions = (data: ContributionsData) => {
  const container = document.querySelector<HTMLElement>('.github-calendar-graph')
  const calendarContainer = document.querySelector<HTMLElement>('.github-calendar-container')

  if (!container || !data.contributions || data.contributions.length === 0) return

  const contributions = data.contributions
  container.innerHTML = ''

  // Prepend placeholders to align to Sunday
  const firstDate = new Date(contributions[0].date)
  const firstDayOfWeek = firstDate.getDay()

  for (let i = 0; i < firstDayOfWeek; i++) {
    const placeholder = document.createElement('div')
    placeholder.className = 'contrib-cell contrib-placeholder'
    container.appendChild(placeholder)
  }

  // Create or get tooltip
  let tooltip = document.querySelector<HTMLElement>('.contrib-tooltip')
  if (!tooltip) {
    tooltip = document.createElement('div')
    tooltip.className = 'contrib-tooltip'
    document.body.appendChild(tooltip)
  }

  contributions.forEach(day => {
    const cell = document.createElement('div')
    cell.className = `contrib-cell contrib-level-${day.level}`

    let glowColor = '#161b22'
    if (day.level === 1) glowColor = '#0e4429'
    else if (day.level === 2) glowColor = '#006d32'
    else if (day.level === 3) glowColor = '#26a641'
    else if (day.level === 4) glowColor = '#39d353'

    cell.addEventListener('mouseenter', () => {
      const rect = cell.getBoundingClientRect()
      const countText =
        day.count === 0
          ? 'No contributions'
          : `${day.count} contribution${day.count === 1 ? '' : 's'}`
      const dateText = formatDate(day.date)

      if (tooltip) {
        tooltip.textContent = `${countText} on ${dateText}`
        tooltip.classList.add('visible')

        const tooltipRect = tooltip.getBoundingClientRect()
        tooltip.style.left = `${rect.left + rect.width / 2 - tooltipRect.width / 2}px`
        tooltip.style.top = `${rect.top - tooltipRect.height - 8 + window.scrollY}px`
      }
      cell.style.boxShadow = `0 0 6px ${glowColor}`
    })

    cell.addEventListener('mouseleave', () => {
      if (tooltip) {
        tooltip.classList.remove('visible')
      }
      cell.style.boxShadow = ''
    })

    container.appendChild(cell)
  })

  if (calendarContainer) {
    calendarContainer.classList.add('loaded')
  }
}

export const fetchContributions = async (username: string) => {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
    )
    if (!response.ok) throw new Error('Failed to fetch contributions')
    const data: ContributionsData = await response.json()
    renderContributions(data)
  } catch (error) {
    console.warn('Error loading contributions:', error)
  }
}
