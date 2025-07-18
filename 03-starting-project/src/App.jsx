import { Fragment } from "react";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  
  return (
    // ? Fragment allows to remove unnecessary div wrapper
    <>
      <Header></Header>
       <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
