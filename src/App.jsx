import React from "react";
// import { Greeting } from "./components";
import { UserCard } from "./components";

function App() {
  return (
    <>
      <UserCard ready={true} number="Primera" />
      <UserCard ready={false} number="Segunda" />
    </>
  );
}

export default App;
