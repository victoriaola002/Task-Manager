import React, {useState} from "react";
import { ChevronDown } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const InputEdit = ({tasks, setTasks}) => {
  const [searchParams] = useSearchParams();
  const taskTitle = searchParams.get("title");

  const taskToEdit = tasks.find((task) => task.title === taskTitle);
 const  [title, setTitle] = useState(taskToEdit?.title || "");
 const [description, setDescription] = useState(
  taskToEdit?.description || ""
);
const [dueDate, setDueDate] = useState(taskToEdit?.dueDate || "");
const [category, setCategory] = useState(taskToEdit?.category || "");
const [tag, setTag] = useState(taskToEdit?.tag || "");
 
  return (
    <div className="mx-auto w-10/12">
      <fieldset className="border border-[#B8B6B6] py-4 px-3">
        <legend className="text-[#B8B6B6] text-xl">Task Title</legend>
        <input
          type="text"
          placeholder="E.g Project Defense, Assignment..."
          className="outline-none w-full text-[#B8B6B6] text-lg"
          value={title}
            onChange={(e) => setTitle(e.target.value)}

        />
      </fieldset>
      {/* description */}
      <fieldset className="border border-[#B8B6B6] py-4 px-3 my-10">
        <legend className="text-[#B8B6B6] text-xl">Description</legend>
        <textarea
          className="py-4 text-[#292929] outline-none bg-transparent w-full resize-none text-lg"
          placeholder="Briefly describe your task..."
           value={description}
  onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </fieldset>

      {/* due date */}

      <fieldset className="border border-[#B8B6B6] py-4 px-3 mt-4">
        <legend className="text-[#B8B6B6] text-xl">Due Date</legend>
        <input
          type="date"
         value={dueDate}
         onChange={(e)=>setDueDate(e.target.value)}
          className="outline-none w-full text-[#B8B6B6] text-lg"
        />
      </fieldset>

      {/* category */}
      <fieldset className="border border-[#B8B6B6] py-4 px-3 mt-5">
        <legend className="text-[#B8B6B6] text-xl">Category</legend>
        <div className="flex gap-3" >
          <button
            className="bg-[#9C9C9C] px-2 py-1 rounded text-[#B8B6B6]"
           onClick={()=>setCategory("School")}
          >
            School
          </button>
          <button
            className="bg-[#9C9C9C] px-2 py-1 rounded text-[#B8B6B6]"
           onClick={()=>setCategory("Personal")}
          >
            Personal
          </button>
        </div>
      </fieldset>

      {/* tags */}
      <fieldset className="border border-[#B8B6B6] py-4 px-3">
        <legend className="text-[#B8B6B6] text-xl">Tags</legend>
        <div className="flex justify-between">
          <div className="flex items-center gap-3 text-[#CCCCCC] py-2 px-2">
            <button className="bg-[#292929] px-2 py-1 rounded" onClick={()=>setTag("Urgent")}>Urgent</button>
            <button className="bg-[#292929] px-2 py-1 rounded" onClick={()=>setTag("Important")}>
              Important
            </button>
          </div>
          <ChevronDown size={25} className="text-[#292929]" />
        </div>
      </fieldset>

      <button className=" my-10 w-full py-3  bg-[#974FD0] text-[#FAF9FB] rounded  text-xl">
        Done
      </button>
      <div className="text-center underline text-[#974FD0] font-medium text-xl">
        <a href="#">Back To Top</a>
      </div>
    </div>
  );
};

export default InputEdit;
