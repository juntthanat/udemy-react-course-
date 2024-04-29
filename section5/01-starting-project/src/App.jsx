import Calculator from "./components/Calculator";
import Log from "./components/Log";
import { useState } from "react";

function App() {
  const [results, setResults] = useState([]);

  const handleResultChange = (updatedResult) => {
    setResults(updatedResult);
  };

  return (
    <>
      <main>
        <Calculator
          changeResult={(updatedResult) => handleResultChange(updatedResult)}
        />
        <Log results={results} />
      </main>
    </>
  );
}

export default App;
