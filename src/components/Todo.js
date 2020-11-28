import React from "react";

const Todo=({text, todo, todos, setTodos})=>{
    const deleteHandler = () => {
        //if not equal, the el should return true and will be remained, otherwise will return true and be deleted
        setTodos(todos.filter(el=>el.id!==todo.id))
    };
    const completeHandler=()=>{
        setTodos(todos.map((item)=>{
            if(item.id===todo.id){
                return {
                    ...item,completed: !item.completed
                };
            }
            return item;
        }));
    };

    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed": ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className={todo.completed ? "fas fa-times-circle" :"fas fa-check"}></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;