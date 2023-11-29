import React from "react";

function Todo({
  todos,
  arrayinitialServices,
  completeTodo // Assuming you have a completeTodo function
}) {
  return (
    <div className="card-body p-2">
      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row border-b border-dashed py-4 flex justify-between"}
          key={index}
        >
          <div onClick={() => completeTodo && completeTodo(todo.id)} className="w-1/3">
            <div className="mb-4">
              <div className="mb-2 font-semibold text-xl">{todo.name}</div>
              <div className="mb-2">{todo.phone}</div>
              <div className="mb-2">{todo.email}</div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="flex flex-col">
              <div className="mb-2 font-semibold">Serveis Contratats:</div>
              <ul>
                {todo.services.map((service) => (
                  <li key={service} className="mb-1">
                    {arrayinitialServices.find((s) => s.name === service).name}
                  </li>
                ))}
                {todo.services.includes("Web") && (
                  <li>
                    <p>Páginas: {todo.nPaginas}</p>
                    <p>Lenguajes: {todo.nLenguajes}</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="w-1/3 flex flex-col justify-end items-end">
            <div className="flex flex-col">
              <p className="font-bold text-lg">Total: {todo.total}</p>
            
            
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todo;