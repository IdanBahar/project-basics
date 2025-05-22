import { AnimalList } from "./cmps/AnimalList.jsx";
import { CountDown } from "./cmps/CountDown.jsx";
import { Header } from "./cmps/Header.jsx";
export function RootCmp() {
  return (
    <div>
      <Header />
      <AnimalList />
      <CountDown startFrom={12} isDone={() => console.log("done")} />
    </div>
  );
}
