// Home.tsx
import * as React from "react";
import { useState, useEffect } from "react";

interface Value {
  buttonValue: string;
}

export default function Home() {
  const [selected, setSelected] = useState("no button");

  useEffect(() => {
    const storedValue = window.localStorage.getItem("test");
    if (storedValue) {
      setSelected(storedValue);
    }
  }, []);

  function saveSelected(button: string) {
    setSelected(button);
    window.localStorage.setItem("test", button);
  }

  return (
    <div>
      <div>Home!</div>

      <div>
        <label>{selected}</label>
        <button onClick={() => saveSelected("button 1")}>button 1</button>
        <button onClick={() => saveSelected("button 2")}>button 2</button>
      </div>
    </div>
  );
}
