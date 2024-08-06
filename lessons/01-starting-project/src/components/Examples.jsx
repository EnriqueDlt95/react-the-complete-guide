import { useState } from "react";
import { EXAMPLES } from "../data";
import Tabs from "./Tabs";
import TabButton from "./TabButton";
import Section from "./Section";

export default function Examples() {
  // we always have to call the react hooks in the top level of a component not inside of any other function inside the component
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>please Select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      {/* the menu tag can serves to us to have a list ob buttons  */}
      <Tabs
        // here we can send what our  HTML elemen or Component we want to set in our Tabs component if it
        // if we wan to send a build in HTML element from react we use: ""  ex. "menu"
        // if we want to send a custom Component created in React we send it only we the name of the component: ex. Section
        // ButtonComponent="menu"   we can set a default value for our Tabs component
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
