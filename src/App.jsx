import React from "react";
// import { Greeting } from "./components";
import { UserCard } from "./components";

function App() {
  return (
    <>
      <UserCard
        name="Camo"
        amount={1000}
        programming={true}
        address={{ street: "123 main street", city: "Bogota" }}
      />
      <UserCard
        name="Carlos"
        amount={500}
        programming={false}
        address={{ street: "123 avenue", city: "Cali"}}
      />
    </>
  );
}

export default App;
