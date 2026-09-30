import React from "react";
import { SquarePen, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const UpdateTask = ({ tasks, setTasks }) => {
  const updateTask = (title) => {
    setTasks(
      tasks.map((task) =>
        task.title === title ? { ...task, completed: true } : task,
      ),
    );
  };
  return (
    <div className="mx-auto w-10/12 my-10">
      {tasks.map((task) => (
        <div className="border border-[#B8B6B6] px-3 py-4" key={task.title}>
          <div className=" flex justify-between border-b border-b-[#B8B6B6] py-4">
            <p className="text-2xl text-red-300">{task.tag}</p>
            <div className="flex items-center gap-3">
              <Link to={`/edittask?title=${task.title}`} className="bg-[#974FD0] flex px-4 py-1 items-center gap-2 rounded">
                <SquarePen size={14} className="text-white" />
                <p className="text-white text-medium">Edit</p>
              </Link>

              <button className="bg-white flex px-3 py-1 items-center gap-2 rounded border border-[#974FD0]">
                <Trash2 size={14} className="text-[#974FD0]" />
                <p className="text-[#974FD0] text-medium">Delete</p>
              </button>
            </div>
          </div>
          <h1 className="text-3xl text-[#292929] py-1">{task.title}</h1>
          <p className="text-[#737171] pb-2 ">{task.description}</p>
          <p>Due: {task.dueDate}</p>
          <p>Category: {task.category}</p>
          <p>Status: {task.completed ? "Completed" : "Pending"}</p>
          <button
            onClick={() => updateTask(task.title)}
            className="bg-[#974FD0] text-white px-4 py-1 rounded mt-2"
          >
            Complete
          </button>
        </div>
      ))}

      <div className="text-center underline text-[#974FD0] font-medium text-xl">
        <a href="#">Back To Top</a>
      </div>
    </div>
  );
};

export default UpdateTask;
