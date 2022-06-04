import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, setDefault } from './calculateReducer'

function App() {
  // Get ค่า State
  const count = useSelector(state => state.counter)
  console.log(count);

  // ใช้เรียก Actions
  const dispatch = useDispatch()

  return (
    <><h1>{count.salary}</h1>
      <input type='button' value="Increase Salary" onClick={() => dispatch(increment())} />
      <input type='button' value="Decreate Salary" onClick={() => dispatch(decrement())} />
      <input type='button' value="Default Salary" onClick={() => dispatch(setDefault())} />
    </>
  );
}

export default App;


