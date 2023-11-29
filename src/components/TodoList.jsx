import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList({ arrayinitialServices, services, webOptions}) {
  
  const [todos, setTodos] = useState([]);
  

  const addTodo = (todo) => {
    if (!todo.name || /^\s*$/.test(todo.name)) {
      return;
    }
    
    const serviceSelect = arrayinitialServices
      .filter((service) => services && services[service.name])
      .map((service) => service.name);

      const calculateTotalCost = () => {
        let total = 0;
      
        total += arrayinitialServices.reduce((acc, service) => {
          if (services[service.name]) {
            return acc + service.cost;
          }
          return acc;
        }, 0);
      
        if (services.Web) {
          total += (webOptions.pages + webOptions.languages) * 30;
        }
      
        return total;
      };
      

    const newTodo = {
      id: todos.length + 1,
      name: todo.name,
      phone: todo.phone,
      email: todo.email,
      services: serviceSelect,
      nPaginas: webOptions.pages,
      nLenguajes: webOptions.languages,
      total: calculateTotalCost(),
      
    };

    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
   
    
  };

  
  

  return (
    <div>
      <h2 className="font-bold text-left text-xl">Demanar Pressupost</h2>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        arrayinitialServices={arrayinitialServices}
        
       
      />
     

    </div>
  );
}

export default TodoList;
