import React, { useState, createContext, useContext, useRef } from 'react';

function App() {
  const mutable = useRef('start');
  console.log(mutable);
  const formRef = useRef();
  const [name, setName] = useState("Initial Name");
  const onClickFunc = () => {
    mutable.current = formRef.current.value
    formRef.current.focus();
    setName(formRef.current.value);
  };

  return (
    <>
      <h1>{name} {mutable.current}</h1>
      <input type="text" ref={formRef} />
      <input type="button" value="click" onClick={onClickFunc} />
    </>
  );
}


export default App;
