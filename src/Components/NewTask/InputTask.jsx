import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const InputTask = ({tasks, setTasks}) => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [tag, setTag] = useState("");
  const [errors, setErrors] = useState({});
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [completed, setCompleted] = useState(false);
  const [success, setSuccess] = useState(false);
 

   useEffect(()=>{
    console.log(tasks);
    
 }, [tasks])
 
const handleSubmit = async () => {
  const newErrors = {};
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selectedDate = new Date(dueDate);

  if (!title.trim()) {
    newErrors.title = "Task Title is required";
  }

  if (!description.trim()) {
    newErrors.description = "Task Description is required.";
  }

  if (!tag) {
    newErrors.tag = "Please select a tag";
  }

  if (!dueDate) {
    newErrors.dueDate = "Please set a DueDate";
  } else if (selectedDate < today) {
    newErrors.dueDate = "Due date cannot be in the past";
  }

  if (!category) {
    newErrors.category = "Please select a category";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

  const newTask = {
    title: title.trim(),
    description: description.trim(),
    dueDate,
    category,
    tag,
    completed
  };

  try {
    const response = await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create task");
    }

    setTasks([...tasks, data.task]);
    setSuccess(true);

    setTitle("");
    setdescription("");
    setDueDate("");
    setCategory("");
    setTag("");
    setCompleted(false);

  } catch (error) {
    console.error("Error creating task:", error);
    setSuccess(false);
    alert("Could not create task. Please check that your backend is running.");
  }
};
   const updateTask = (title) =>{
    setTasks(
        tasks.map((task)=>
        tasks.title === title ? {...task, completed:true } : task) 
    )
  }
  const deleteTask = (title) => {
    setTasks(
        tasks.filter((task)=> task.title !== title)
    )
  };

  return (
    <div className="mx-auto w-10/12">
      <fieldset className="border border-[#B8B6B6] py-4 px-3 my-3">
        <legend className="text-[#B8B6B6] text-xl">Task Title</legend>
        <input
          type="text"
          placeholder="E.g Project Defense, Assignment..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="outline-none w-full text-[#B8B6B6] text-lg"
        />
      </fieldset>

      {errors.title && <p className="text-red-600 mt-2">{errors.title}</p>}

      {/* description */}
      <fieldset className="border border-[#B8B6B6] py-4 px-3 mt-10">
        <legend className="text-[#B8B6B6] text-xl">Description</legend>
        <textarea
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          className="py-4 text-[#B8B6B6] outline-none bg-transparent w-full resize-none text-lg"
          placeholder="Briefly describe your task..."
        ></textarea>
      </fieldset>
      {errors.description && (
        <p className="text-red-600 mt-2">{errors.description}</p>
      )}

      {/* due date */}
      <fieldset className="border border-[#B8B6B6] py-4 px-3 mt-4">
        <legend className="text-[#B8B6B6] text-xl">Due Date</legend>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="outline-none w-full text-[#B8B6B6] text-lg"
        />
      </fieldset>
      {errors.dueDate && <p className="text-red-600 mb-2">{errors.dueDate}</p>}
      {/* category */}
      <fieldset className="border border-[#B8B6B6] py-4 px-3 mt-5">
        <legend className="text-[#B8B6B6] text-xl">Category</legend>
        <div className="flex gap-3">
          <button
            className="bg-[#9C9C9C] px-2 py-1 rounded text-[#B8B6B6]"
            value={category}
            onClick={() => setCategory("School")}
          >
            School
          </button>
          <button
            className="bg-[#9C9C9C] px-2 py-1 rounded text-[#B8B6B6]"
            value={category}
            onClick={() => setCategory("Personal")}
          >
            Personal
          </button>
        </div>
      </fieldset>
      {errors.category && (
        <p className="text-red-600 mb-2">{errors.category}</p>
      )}
      {/* tags */}
      <fieldset className="border border-[#B8B6B6] py-4 px-3 mt-5">
        <legend className="text-[#B8B6B6] text-xl">Tags</legend>
        <div className="flex justify-between">
          <div className="flex items-center gap-3 text-[#CCCCCC] py-2 px-2">
            <button
              className="bg-[#9C9C9C] px-2 py-1 rounded"
              value={tag}
              onClick={() => setTag("Urgent")}
            >
              Urgent
            </button>
            <button
              className="bg-[#9C9C9C] px-2 py-1 rounded"
              value={tag}
              onClick={() => setTag("Important")}
            >
              Important
            </button>
          </div>
          <ChevronDown size={25} className="text-[#9C9C9C]" />
        </div>
      </fieldset>
      {errors.tag && <p className="text-red-600 mb-3">{errors.tag}</p>}

      <button
        className=" my-10 w-full py-3  bg-[#974FD0] text-[#FAF9FB] rounded  text-xl"
        onClick={handleSubmit}
      >
        Done
      </button>


      {success && (
        <p className="text-green-600 text-center">Task created Successfully</p>
      )}

      <div className="text-center underline text-[#974FD0] font-medium text-xl">
        <a href="#">Back To Top</a>
      </div>
    </div>
  );
};

export default InputTask;
