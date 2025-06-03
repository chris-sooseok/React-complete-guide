import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data-with-examples.js";

function App() {
  /* Hooks: useState
  Only call hooks inside of component function
  Only call hooks on the top level */
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  }

  let tabContant = <p>Please select a topic</p>;

    if (selectedTopic) {
      tabContant = (
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
    <div>
      <Header></Header>
      <main>
        {/* core-concepts for style */}
        <section id="core-concepts">
          <h2> Core Concepts </h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => 
             <CoreConcept {...conceptItem} />
             )}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'}
              onSelect={function () {
                handleSelect("components");
              }}
            >
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabContant}
        </section>
      </main>
    </div>
  );
}

export default App;
