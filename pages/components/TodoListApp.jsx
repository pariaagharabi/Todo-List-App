import React, { useState } from 'react';

const TodoListApp = () => {
    // Initializing, Destructuring and Updating States
    const [defaultTodoList, setDefaultTodoList] = useState([
        { id: crypto.randomUUID().toString(), title: "Html", checked: false, },
        { id: crypto.randomUUID().toString(), title: "Css", checked: false, },
        { id: crypto.randomUUID().toString(), title: "JavaScript", checked: false, },
    ]);
    const [currentInputValue, setCurrentInputValue] = useState("");
    const [newTitleAdded, setNewTitleAdded] = useState(defaultTodoList);

    // Defining Methods
    const handleCurrentInputChange = (e) => {
        const currentValue = e.target.value;
        setCurrentInputValue(currentValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEntry = {
            id: crypto.randomUUID().toString(),
            title: currentInputValue,
            checked: false,
        }

        const clonedEntry = [...defaultTodoList, newEntry];
        setNewTitleAdded(clonedEntry);
        setCurrentInputValue("");
    };

    const handleDeleteTodo = (id) => {
        const deletedItem = newTitleAdded.filter(delItem => delItem.id !== id);
        setNewTitleAdded(deletedItem);
    };

    const handleToggleChecked = (idx) => {
        const clonedTodos = [...newTitleAdded];
        clonedTodos[idx].checked = !clonedTodos[idx].checked;
        setNewTitleAdded(clonedTodos);
    }


    // Re-rendering in UI
    return (
        <>
            <div className="app-container">
                <div className="app-inner-cntainer">

                    <div className="app-header-container">
                        <h1>Todo List - React App</h1>
                        <h3>Total Todos: {newTitleAdded.length}</h3>
                    </div>

                    <div className="todo-list-container">
                        <form className="todo-list-form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="todoList"
                                placeholder="Add New Todo..."
                                value={currentInputValue}
                                onChange={handleCurrentInputChange}
                            />

                            <button>+</button>
                        </form>

                    </div>

                    <div className="display-new-todos">
                        {
                            newTitleAdded.map((newTitle, index) => {
                                return (
                                    <div className="todo-items" key={newTitle.id}>
                                        <input
                                            type="checkbox"
                                            name="checkboxTodo"
                                            checked={newTitle.checked}
                                            onChange={() => handleToggleChecked(index)}
                                        />
                                        <span className="item" contentEditable={true} suppressContentEditableWarning={true}>{newTitle.title}</span>
                                        <button className="delete-btn" onClick={() => handleDeleteTodo(newTitle.id)}>X</button>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="todos-notification">
                        <h3>
                            {newTitleAdded.length === 0 ? "All Todos Completed!🥳" : ""}
                        </h3>
                    </div>

                </div>
            </div>

        </>
    );
}

export default TodoListApp;
