import React, { useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const deleteTask = (title) => {
    setTasks(tasks.filter((task) => task.title !== title));
  };
  const filteredTasks = tasks.filter((task) => {
    const matchesCategory =
      selectedCategory === "All" || task.category === selectedCategory;

    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto w-10/12 my-10">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-[#B8B6B6] rounded-lg px-4 py-3 outline-none focus:border-[#974FD0]"
        />
      </div>
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <div className="border border-[#B8B6B6] px-3 py-4" key={task.title}>
            <div className=" flex justify-between border-b border-b-[#B8B6B6] py-4">
              <p className="text-2xl text-red-300">{task.tag}</p>
              <div className="flex items-center gap-3">
                <Link
                  to={`/edittask?title=${task.title}`}
                  className="bg-[#974FD0] flex px-4 py-1 items-center gap-2 rounded"
                >
                  <SquarePen size={14} className="text-white" />
                  <p className="text-white text-medium">Edit</p>
                </Link>

                <button
                  className="bg-white flex px-3 py-1 items-center gap-2 rounded border border-[#974FD0]"
                  onClick={() => deleteTask(task.title)}
                >
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
        ))
      ) : (
        <p className="text-center text-gray-500 py-6">
          {searchTerm ? "No tasks match your search." : "No tasks available."}
        </p>
      )}

      <div className="text-center underline text-[#974FD0] font-medium text-xl">
        <a href="#">Back To Top</a>
      </div>
    </div>
  );
};

export default UpdateTask;
