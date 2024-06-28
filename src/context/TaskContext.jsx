import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(titleTask, descriptionTask) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: titleTask,
        description: descriptionTask,
      },
    ]); //Copia el arreglo de tareas y agrega una nuava tarea
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
    //console.log(tasks);
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
