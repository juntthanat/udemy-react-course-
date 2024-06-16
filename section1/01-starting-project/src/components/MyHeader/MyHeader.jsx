import reactIMG from "../../assets/react-core-concepts.png";
import "./MyHeader.css"

const reactDescriptions = ["Fundamental", "Crucial", "Core"];


function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export default function MyHeader() {
  return (
    <header>
      <img src={reactIMG} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt(reactDescriptions.length)]} React
        concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
