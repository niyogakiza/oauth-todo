import React, { useState } from 'react'

const CreateTasks = ({ addTask }) => {
    const [value, setValue] = useState('')
    const handleSubmit = event => {
        event.preventDefault()
        if (!value) return null
        addTask(value)
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}

export default CreateTasks
