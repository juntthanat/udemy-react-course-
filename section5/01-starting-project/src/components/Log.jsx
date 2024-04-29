import { formatter } from "../util/investment.js";

export default function Log({ results }) {
  let totalInterest = 0;
  let investedCapital = 0;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format((totalInterest += result.interest))}</td>
            <td>
              {formatter.format(
                (investedCapital += result.annualInvestment) +
                  result.initialInvestment
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
