import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./containers/Navbar";
import Hero from "./containers/Hero";
import Coffee from "./containers/Coffee";
import Equipment from "./containers/Equipment";
import Store from "./containers/Store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Coffee/>
      <Equipment />
      <Store />
    </>
  );
}

export default App;
