const { useState, useEffect, useRef } = React;

import { AnimalList } from "./cmps/AnimalList.jsx";
import { CountDown } from "./cmps/CountDown.jsx";
import { MouseMonitor } from "./cmps/MouseMonitor.jsx";

export function RootCmp() {
  const [route, setRoute] = useState("AnimalList");
  return (
    <div>
      <nav>
        <a onClick={() => setRoute("AnimalList")} href="#">
          Animal-list
        </a>
        <a href="#">Season-clock</a>
        <a onClick={() => setRoute("CountDown")} href="#">
          Count-down
        </a>
        <a href="#">Watcher-app</a>
        <a onClick={() => setRoute("MouseMonitor")} href="#">
          Mouse-Monitor
        </a>
      </nav>
      {route === "AnimalList" && <AnimalList />}
      {route === "CountDown" && (
        <CountDown startFrom={12} isDone={() => console.log("done")} />
      )}
      {route === "MouseMonitor" && <MouseMonitor />}
    </div>
  );
}
