const { useState, useEffect, useRef } = React
export function SeasonClock() {
  const [season, setSeason] = useState({ month: '', season: '', day: '' })
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const currentDate = new Date()
    const dayIndex = currentDate.getDay()
    const monthIndex = currentDate.getMonth()

    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]

    const month = months[monthIndex]
    const day = days[dayIndex]

    let currentSeason
    if (monthIndex >= 2 && monthIndex <= 4) {
      currentSeason = 'spring'
    } else if (monthIndex >= 5 && monthIndex <= 7) {
      currentSeason = 'summer'
    } else if (monthIndex >= 8 && monthIndex <= 10) {
      currentSeason = 'autumn'
    } else {
      currentSeason = 'winter'
    }

    setSeason({ month, season: currentSeason, day })
  }, [])
  function checkTheme() {
    const classList = ['season-container']
    if (isDarkMode) classList.push('dark', season.season.toLocaleLowerCase())

    return classList.join(' ')
  }
  return (
    <div
      className={checkTheme()}
      onClick={() => setIsDarkMode((prev) => !prev)}
    >
      <h2>
        {season.month}({season.season})
      </h2>
      <img
        src={`./public/season-imgs/${season.season}.png`}
        alt={season.season}
      />
      <h3>{season.day}</h3>
    </div>
  )
}
