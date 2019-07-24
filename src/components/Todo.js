import React, { useState, useEffect } from 'react'
import Task from './Task'
import { tasksData } from "./data/tasks"
import CreateTasks from "./CreateTasks"

const Todo = () => {
    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState(tasksData)

    useEffect(() => {
        setTasksRemaining(tasks.filter(task => !task.completed).length)
    });

    const addTask = title => {
        const newTask = [...tasks, {title, completed: false}]
        setTasks(newTask)

    }

    const completeTasks = index => {
        const newTask = [...tasks]
        const completeTask = newTask[index].completed === true
        setTasks(completeTask)
    }
    const removeTasks = index => {
        const newTask = [...tasks]
        newTask.splice(index, 1)
        setTasks(newTask)
    }
    return (
        <div className="todo-container">
            <div className="header">Pending tasks ({tasksRemaining})</div>
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                        task={task}
                        index={index}
                        key={index}
                        completeTask={completeTasks}
                        removeTask={removeTasks}
                    />
                ))}
            </div>
            <div className="create-task">
                <CreateTasks addTask={addTask}/>
            </div>
        </div>
    )
}
export default Todo
