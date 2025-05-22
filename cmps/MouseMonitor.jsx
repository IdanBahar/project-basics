const { useState, useEffect, useRef } = React;

export function MouseMonitor() {
  const [mouseTracker, setOnMouseTracker] = useState({ x: 0, y: 0 });
  const [isPause, setIsPause] = useState(true);
  function mouseHandler(ev) {
    if (!isPause) setOnMouseTracker({ x: ev.clientX, y: ev.clientY });
  }
  console.log(mouseTracker);
  useEffect(() => {
    window.addEventListener("mousemove", mouseHandler);

    return () => {
      window.removeEventListener("mousemove", mouseHandler);
    };
  }, [isPause]);

  return (
    <div className="mouse-position">
      <h2>Mouse Position</h2>
      {!isPause && (
        <p>
          X: {mouseTracker.x} Y:{mouseTracker.y}
        </p>
      )}

      <button onClick={() => setIsPause((prev) => !prev)}>
        {isPause ? "Resume" : "Pause"}
      </button>
    </div>
  );
}
