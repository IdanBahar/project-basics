const { useState, useEffect, useRef } = React

function animateCSS(el, animation = 'bounce') {
  const prefix = 'animate__'
  return new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`
    el.classList.add(`${prefix}animated`, animationName)
    function handleAnimationEnd(event) {
      event.stopPropagation()
      el.classList.remove(`${prefix}animated`, animationName)
      resolve('Animation ended')
    }

    el.addEventListener('animationend', handleAnimationEnd, { once: true })
  })
}
export function CountDown({ startFrom = 10, toTime, onDone }) {
  const boxRef = useRef()
  const [currNum, setCurrNum] = useState(startFrom)

  function isLow() {
    const classList = ['count-down']
    if (currNum <= 6) classList.push('low')
    return classList.join(' ')
  }
  useEffect(() => {
    let intervalId
    let endTime

    if (toTime) {
      endTime = toTime
      const remainingTime = Math.ceil((toTime - Date.now()) / 1000)
      setCurrNum(remainingTime)
    } else {
      endTime = Date.now() + startFrom * 1000
    }

    intervalId = setInterval(() => {
      const secondsLeft = Math.ceil((endTime - Date.now()) / 1000)
      setCurrNum(secondsLeft)
      if (secondsLeft <= 0) {
        clearInterval(intervalId)
        if (onDone) onDone()
        animateCSS(boxRef.current, 'bounce')
        // new Audio('./sounds/alert.mp3').play(); // Optional sound trigger
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])
  return (
    <div ref={boxRef} className={isLow()}>
      {currNum}
    </div>
  )
}
