import React, {useState} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import MyTask from "./pages/MyTask"
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";


function App() {
  const [tasks, setTasks] = useState([])
  console.log("App tasks:", tasks) 
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mytask" element={<MyTask tasks={tasks} setTasks={setTasks}/>} />
          <Route path="/newtask" element={<NewTask tasks={tasks} setTasks={setTasks}/>}/>
          <Route path="/edittask" element={<EditTask  tasks={tasks} setTasks={setTasks}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
