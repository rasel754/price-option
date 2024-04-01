import "./App.css";
import NavBar from "./components/DaisyNav/NavBar/NavBar";
import DaisyNav from "./components/DaisyNav/DaisyNav";
import PriceOption from "./components/PriceOption/PriceOption";
import LineChart from "./components/LineChart/LineChart";
import Phones from "./components/Phones/Phones";
// import { LineChart } from "recharts";

function App() {
  return (
    <>
      {/* <LineChart></LineChart> */}
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      <h1 className="text-4xl bg-red-600">Vite + React</h1>
      <PriceOption></PriceOption>
      <LineChart></LineChart>
      <Phones></Phones>

    </>
  );
}

export default App;
