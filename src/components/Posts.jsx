import React from "react";

function Posts() {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const random = getRandomInt(1, 151);

  const fetchData = async (id) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData(random);
  return <div>{}</div>;
}

export default Posts;
