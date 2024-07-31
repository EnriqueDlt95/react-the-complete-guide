import { useState } from "react"; // al the functions from react that start with the "use" are Hooks
// the special thing about react hooks is the they are technically regular functions
// but they must only be called inside of React component functions
// or inside of other react hooks

import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
