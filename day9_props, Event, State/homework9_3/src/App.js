import './App.css';
import React, { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([
    { date: new Date(), msg: "HELLO !!" },
  ])

  const onKeyPressFunction = (e) => {
    let tempData = [...todoList];
    let m = e.target.value;
    console.log(m)
    if (e.which === 13 && m !== "") {
      tempData.push({ date: new Date(), msg: m });
      e.target.value = "";
    }
    else if (e.which === 13 && m == "") {
      alert("Please enter your message")
    }

    setTodoList(tempData);
  }

  const deleteList = (x) => {
    let remove = todoList.filter((y) => (y.msg !== x.msg));
    setTodoList(remove)
  }

  console.log(todoList);

  const list = todoList.map((x) => (
    <div>
      <p style={{marginTop: "30px"}}>{x.date.toString()}</p>
      <p>{x.msg}<button onClick={() => deleteList(x)} style={{marginLeft: "20px"}}>DELETE</button></p>
    </div>
  ))

return (
  <>
    {list}
    <input type="text" onKeyPress={onKeyPressFunction} style={{marginTop: "10px"}}/>
  </>
)

}

export default App;
