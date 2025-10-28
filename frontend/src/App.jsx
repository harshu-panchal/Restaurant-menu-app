import React, { useState } from "react";
import PhoneEntry from "./components/PhoneEntry";
import MenuList from "./components/MenuList";

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {entered ? (
        <MenuList />
      ) : (
        <PhoneEntry onSubmit={() => setEntered(true)} />
      )}
    </>
  );
}

export default App;
