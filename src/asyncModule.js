import React, { useContext } from "react";
import { ColorContext } from "./contexts/colorContex";
//import './App.css';

function AssyncModule({ toogle }) {
  const { theme } = useContext(ColorContext);

  setTimeout(() => {
    toogle("light");
  }, 5000);

  return (
    <div
      style={{
        height: 80,
        width: "100%",
        backgroundColor: theme.background.principal,
      }}
    >
      <p style={{ color: theme.color.principal }}>lazy</p>
    </div>
  );
}

export default AssyncModule;
