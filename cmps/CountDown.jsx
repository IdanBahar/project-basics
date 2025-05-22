const { useState, useEffect } = React;

export function CountDown({ startFrom = 10, isDone }) {
  const [currNum, setCurrNum] = useState(startFrom);
  useEffect(() => {
    if (currNum <= 0) {
      if (isDone) isDone();
      return;
    }
    const intervalId = setInterval(() => {
      setCurrNum((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  });
  return <div className="count-down">{currNum}</div>;
}
