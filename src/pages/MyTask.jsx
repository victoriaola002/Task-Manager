import React, { useState, useEffect} from 'react'
import HeroNewTask from '../Components/MyTask/HeroNewTask'
import UpdateTask from '../Components/MyTask/UpdateTask'
import TaskSearch from '../Components/MyTask/TaskSearch'

const MyTask = ({ tasks, setTasks }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const query = searchTerm.trim();

        const url = query
          ? `http://localhost:5000/api/tasks/search?q=${encodeURIComponent(query)}`
          : "http://localhost:5000/api/tasks";

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }

        const data = await response.json();
        setTasks(data);

      } catch (error) {
        console.error("Search error:", error);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, setTasks]);

  return (
    <div>
      <TaskSearch
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <HeroNewTask />
      <UpdateTask
        tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default MyTask