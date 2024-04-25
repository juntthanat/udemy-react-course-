import MyHeader from "./components/MyHeader/MyHeader.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";
import { useState } from "react";


function App() {
  return (
    <>
      <MyHeader />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
