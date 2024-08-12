"use client";

import List from "./List";

function Khashayar({ children }) {
  return (
    <>
      <h2 onClick={() => console.log("hello world!")} style={{ backgroundColor: "gold", textAlign: "center" }}>
        Khashayar
      </h2>
      {/* <List /> */}
      {children}
    </>
  );
}

export default Khashayar;
