import UserInput from "./UserInput";
import { useState, useEffect } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Calculator({ changeResult }) {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleInitialInvestmentChange = (event) => {
    setInitialInvestment(event.target.value);
  };
  const handleAnnualInvestmentChange = (event) => {
    setAnnualInvestment(event.target.value);
  };
  const handleExpectedReturnChange = (event) => {
    setExpectedReturn(event.target.value);
  };
  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  useEffect(() => {
    if (
      initialInvestment > 0 &&
      annualInvestment > 0 &&
      expectedReturn > 0 &&
      duration > 0
    ) {
      calculateResult();
    } else {
      alert("The input shouldn't be negative");
    }
  }, [initialInvestment, annualInvestment, expectedReturn, duration]);

  let result = {};
  const calculateResult = () => {
    result = calculateInvestmentResults({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    });
    changeResult(result);
  };

  return (
    <div id="user-input">
      <div className="input-group">
        <UserInput
          label="Initial Investment"
          onChange={handleInitialInvestmentChange}
        />
        <UserInput
          label="Annual Investmnet"
          onChange={handleAnnualInvestmentChange}
        />
      </div>
      <div className="input-group">
        <UserInput
          label="Expected Return"
          onChange={handleExpectedReturnChange}
        />
        <UserInput label="Duration" onChange={handleDurationChange} />
      </div>
    </div>
  );
}
