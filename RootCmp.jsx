import { AnimalList } from "./cmps/AnimalList.jsx";
import { Header } from "./cmps/Header.jsx";
export function RootCmp() {
  return (
    <div>
      <Header />
      <AnimalList />
    </div>
  );
}
