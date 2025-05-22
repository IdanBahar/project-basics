const { useState, useEffect } = React;

export function CountDown({ startFrom = 10, isDone }) {
  const [currNum, setCurrNum] = useState(startFrom);

  function isLow() {
    const classList = ["count-down"];
    if (currNum <= 6) classList.push("low");
    return classList.join(" ");
  }
  useEffect(() => {
    if (currNum <= 0) {
      isDone();
      return;
    }
    const intervalId = setInterval(() => {
      setCurrNum((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  });
  return <div className={isLow()}>{currNum}</div>;
}
