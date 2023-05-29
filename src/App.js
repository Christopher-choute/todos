import React, {useState} from 'react'

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    }
    
    // adding stuff to the list
    setList([...list, newTodo]);
    
    //clearing the input box 
    setInput("")
  }

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id)

    setList(newList)
  }

  return (
    <div className= "center">
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
      <h1>To do List For the Day</h1>
      <input type = "text" value = {input} onChange ={(e) => setInput(e.target.value)}/>
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) =>(
          <li key = {todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
