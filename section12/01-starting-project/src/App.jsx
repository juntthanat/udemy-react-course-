import { useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Summary from "./components/Summary";
function App() {
  const [quizComplete, setQuizComplete] = useState(false);

  return (
    <div>
      <Header />
      {quizComplete ? <Summary /> : <Quiz />}
    </div>
  );
}

export default App;
