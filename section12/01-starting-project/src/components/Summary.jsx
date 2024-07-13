import quizComplete from "../assets/quiz-complete.png";

export default function Summary() {
  return (
    <div id="summary">
      <img src={quizComplete} />
      <h2>QUIZ COMPLETED!</h2>
      {/* Stats */}
      <div id="summary-stats">
        <p>
          <div className="number">12%</div>
          <div className="text">SKIPPED</div>
        </p>
        <p>
          <div className="number">12%</div>
          <div className="text">ANSWERED CORRECTLY</div>
        </p>
        <p>
          <div className="number">12%</div>
          <div className="text">ANSWERED INCORRECTLY</div>
        </p>
      </div>

      {/* Summary */}
      <div>
        <ol>
          <li>
            <h3>1</h3>
            <div className="question">
              Which of the following best describe React.js?
            </div>
            <div className="user-answer correct">
              A library to build user interfaces with help of declarative code.
            </div>
          </li>
          <li>
            <h3>2</h3>
            <div className="question">
              Which of the following best describe React.js?
            </div>
            <div className="user-answer wrong">
              A library to build user interfaces with help of declarative code.
            </div>
          </li>
          <li>
            <h3>3</h3>
            <div className="question">
              Which of the following best describe React.js?
            </div>
            <div className="user-answer skipped">
              A library to build user interfaces with help of declarative code.
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
