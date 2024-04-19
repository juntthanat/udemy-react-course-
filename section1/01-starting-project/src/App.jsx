import componentsImg from "./assets/components.png"
import {CORE_CONCEPTS} from "./data.js"
import MyHeader from "./components/MyHeader/MyHeader.jsx";
import CoreConcept from "./components/CoreConcept.jsx";


function App() {
  return (
    <div>
      <MyHeader />
      <main>
        <section id="core-concepts">
          <h2>Core Concept</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0]. description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}
            />
            <CoreConcept {...CORE_CONCEPTS[2]}
            />
            <CoreConcept {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
