import { useState } from "react"; // al the functions from react that start with the "use" are Hooks
// the special thing about react hooks is the they are technically regular functions
// but they must only be called inside of React component functions
// or inside of other react hooks

import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS } from "./data";

function App() {
  // we always have to call the react hooks in the top level of a component not inside of any other function inside the component
  const [selectedTopic, setSelectedTopic] = useState("Please click a Button");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            code
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
            {/* using the spread operator as
            our key properties ar equal of those in our jsx tag and the oobject
            where we get the information we can use the spread operator and we
            will get the same key values */}
          </ul>
        </section>
        <section id="examples">
          {/* the menu tag can serves tio us to have a list ob buttons  */}
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
