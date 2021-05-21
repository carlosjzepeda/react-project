import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <h1>Simple animations I made using React and GSAP for practice.</h1>
      <div className='container'>
        <Image />
      </div>
    </>
  );
}

export default App;
