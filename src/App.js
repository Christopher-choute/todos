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

  const toggleComplete = (id) => {
    const updatedList = list.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed, // Toggle the completed property
        };
      }
      return todo;
    });
  
    setList(updatedList);
  };
  

  return (
    <div className= "center">
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
      <h1 className='header'>To do List For the Day</h1>
      <input className='input' type = "text" value = {input} onChange ={(e) => setInput(e.target.value)}/>
      <button className='add' onClick={() => addTodo(input)}>Add</button>
      <ul className='list'>
        {list.map((todo) =>(
          <li key = {todo.id}>
            <span className={todo.completed ? "completed" : ""}
            onClick={() => toggleComplete(todo.id)}>
            {todo.todo}
      </span>
            <button className='erase' onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
