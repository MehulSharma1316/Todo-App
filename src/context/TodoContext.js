import {createContext, useContext} from 'react'

export const TodoContext = createContext({

    todos: [
        {
            id: 1,
            todomsg: "text",
            complete: false
        }
    ],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id, todo) => {},
    completedTodo: (id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}