const { useState, useEffect, useRef, Fragment } = React

import { AnimalList } from './cmps/AnimalList.jsx'
import { CountDown } from './cmps/CountDown.jsx'
import { MouseMonitor } from './cmps/MouseMonitor.jsx'
import { SeasonClock } from './cmps/SeaconClock.jsx'

export function RootCmp() {
  const [route, setRoute] = useState('AnimalList')
  return (
    <div>
      <h1 className='typewriter'>My First App – Please Clap 👏 . . . .</h1>
      <nav>
        <a
          className='cool-hover'
          onClick={() => setRoute('AnimalList')}
          href='#'
        >
          Animal-list
        </a>
        <a
          className='cool-hover'
          onClick={() => setRoute('SeasonClock')}
          href='#'
        >
          Season-clock
        </a>
        <a
          className='cool-hover'
          onClick={() => setRoute('CountDown')}
          href='#'
        >
          Count-down
        </a>
        <a className='cool-hover' href='#'>
          Watcher-app
        </a>
        <a
          className='cool-hover'
          onClick={() => setRoute('MouseMonitor')}
          href='#'
        >
          Mouse-Monitor
        </a>
      </nav>
      {route === 'AnimalList' && <AnimalList />}
      {route === 'CountDown' && (
        <CountDown
          toTime={Date.now() + 1000}
          onDone={() => console.log('done')}
        />
      )}
      {route === 'MouseMonitor' && <MouseMonitor />}
      {route === 'SeasonClock' && <SeasonClock />}
    </div>
  )
}
