const express = require("express")

const app = express()

app.use(express.json())

const PORT = 5000;

const tasks = [];

app.get("/", (req, res)=>{
    res.send("Hello, this server is running")
})

app.get("/api/tasks", (req, res)=>{
    res.json(tasks);
})

app.get("/api/tasks/:id", (req, res)=>{
   const id = Number(req.params.id);

   const task =tasks.find(task=> task.id ===id);
   if (!task){
    return res.status(404).json({
        message: "Task not found"
    })
   } 
   res.json(task)
})
// update
app.put("/api/tasks/:id", (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    task.title = req.body.title;
    task.description = req.body.description;

    res.json({
        message: "Task updated successfully",
        task
    });
});


// delete a task
app.delete("/api/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    const deletedTask = tasks.splice(taskIndex, 1);

    res.json({
        message: "Task deleted successfully",
        task: deletedTask[0]
    });
});
// create a task
app.post("/api/tasks/", (req, res) =>{
    const newTask = {
        id: tasks.length + 1,
        ...req.body
    };
    tasks.push(newTask);
    res.status(201).json({
        message: "Task created successfully",
        task:newTask,
    })


})
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
    
})
