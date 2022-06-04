import React, { useState, useEffect } from 'react';
import './App.css';


//LAB1 useState
// function App() {
//   return <Data value="2" />
// }

// function Data(props) {
//   const calculation = (data) => {
//     return data * 2 + 10
//   }

//   const [state, setState] = useState(calculation(props.value));

//   return <><p>{state}</p><p>{state}</p></>
// }

// export default App;



//LAB2 useEffect
function App() {
  const header = 'This is HEADER';
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(() => {
    console.log('onetime useEffect')
  }, []);

  useEffect(() => {
    console.log('Multi useEffect', counter)
  }, [counter]);

  return (
    <>
      <h1>{header}</h1>
      <h3>
        count1 : {counter} | count2 : {counter2}
      </h3>
      <input
        type="button"
        value="ADD COUNT1"
        onClick={() => setCounter(counter + 1)}
      />
      <input
        type="button"
        value="ADD COUNT2"
        onClick={() => setCounter2(counter2 + 1)}
      />
    </>
  )
}

export default App;




