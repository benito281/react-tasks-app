import { useContext } from "react";
import { TaskCard } from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
export function TaskList() {
   const { tasks }  = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1 className="text-white font-bold text-3xl text-center">No tasks</h1>;
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
