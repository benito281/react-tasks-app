import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  function handleSubmit(e) {
    e.preventDefault();

    createTask( title, description ); //Se pasa la tarea y la descripción
    //Despues de guardar la tarea, se vacian el title y description
    setTitle("");
    setDescription("");
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl text-white font-bold mb-3">Create Task</h1>
        <input
          type="text"
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button type="submit" className="bg-indigo-400 text-white px-3 py-1 w-full">Save task</button>
      </form>
    </div>
  );
}
