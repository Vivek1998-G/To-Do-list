import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
function App() {
function Add(){
  return(<div class="pink"><ul><li>weak up at morning</li><li>do exrcise</li>
  <li>take tea</li>
  <li>do home work</li></ul></div>
  )
}




  return (<div class="myclass">
  <h1>To Do List</h1>
  <br></br><input type="text" id="me" placeholder='Enter the To-Do'/> <button >Add</button>
  <div class="pink"></div>
<Add/>
  </div>)
}



 /* const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const[item, setItem] =useState("");
  const handleSubmit = e => {
    e.preventDefault();
  }
  const handleChange=event=>{
    setItem(event.target.value);
    
  }
  let listArr=[];
  function Pushh(){
    let get=document.getElementById("me").value
    console.log(get)
 
 listArr.push(get)
 console.log(listArr)
 return(<div class="pink"><ul><li>start walking</li>
   <li>run</li><li>{get}</li></ul></div>)
  }
  
   

  return (<div class="myclass">
    <h1>To Do List</h1>
    <br></br><input type="text" id="item" onChange={handleChange} value={item} ref={inputRef}></input> <button onClick={handleSubmit}>Add</button>
 <input id="me"></input>
 <button onClick={Pushh}>push</button><Pushh /> </div>)}







    /*
    function Todo({ todo, index, markTodo, removeTodo }) {
      return (
        <div
          className="todo"
          
        >
          <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
          <div>
            <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
            <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
          </div>
        </div>
      );
    }
    
   () function FormTodo({ addTodo }) {
      const [value, setValue] = React.useState("");
    
      const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
      };
    
      return (
        <Form onSubmit={handleSubmit}> 
        <Form.Group>
          <Form.Label><b>Add Todo</b></Form.Label>
          <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
        </Form.Group>
        <Button variant="primary mb-3" type="submit">
          Submit
        </Button>
      </Form>
      );
    }
    
    function App() {
      const [todos, setTodos] = React.useState([
        {
          text: "This is a sampe todo",
          isDone: false
        }
      ]);
    
      const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };
    
      const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
      };
    
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };
    
      return (
        <div className="app">
          <div className="container">
            <h1 className="text-center mb-4">Todo List</h1>
            <FormTodo addTodo={addTodo} />
            <div>
              {todos.map((todo, index) => (
                <Card>
                  <Card.Body>
                    <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    markTodo={markTodo}
                    removeTodo={removeTodo}
                    />
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
  );
}
*/
export default App;
