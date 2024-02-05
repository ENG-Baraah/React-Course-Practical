import Header from "./Header";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";

function CoreConcept({ title, image, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
//Alternative way
//function CoreConcept(props) {
// return (
//   <li>
//     <img src={props.image} alt={props.title} />
//     <h3>{props.title}</h3>
//     <p>{props.description}</p>
//   </li>
// );
// }
//----

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core-Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* Alternative way */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
