import React,{useState, useEffect} from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //state stuffs
  const [inputText, setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);

  //run once
  useEffect(()=>{
    getLocalTodos();
  },[])

  //use effect
  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  }, [todos, status]) //every time todos changed, run the function

  //function
  const filterHandler=()=>{
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo=> todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo=> todo.completed !== true));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  //save to localStorage
  const saveLocalTodos=()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  //get localStorage
  const getLocalTodos=()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]));
    }else{
      let localData=JSON.parse(localStorage.getItem("todos",JSON.stringify(todos)));
      setTodos(localData);
    }
  }

	return (
		<div className="App">
			<header>
				<h1>Todo List </h1>
			</header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
		</div>
	);
}

export default App;
