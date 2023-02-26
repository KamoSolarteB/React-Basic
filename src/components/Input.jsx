import React from "react";

function Input() {
  const handleChange = (e) => {
    console.log(e.target.value);
  }
  return (
      <input className="w-[200px] h-10 bg-indigo-400 text-white pt-[10px] border-none outline-none rounded-xl pl-[15px] mt-20 ml-20" onChange={handleChange}></input>
  );
}

export default Input;
