import React, { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increase':
      return (state + 1);
    case 'decrease':
      return (state - 1);
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h1>Count: {state}</h1>
      <button onClick={() => dispatch({ type: 'decrease' })}>-</button>
      <button onClick={() => dispatch({ type: 'increase' })}>+</button>
    </>
  );
}

export default App;
