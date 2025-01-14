import { createContext,useContext } from "react";

export const ToDoContext =createContext({
    todos:[
        {
            id:1,
            todo:'random message',
            completed:false,
        }
    ],
    addToDo: (todo)=>{},
    toggleComplete:(id)=>{},
    editToDo:(id,todo)=>{},
    deleteToDo:(id)=>{},
})


export const useToDo = ()=>{
    return useContext (ToDoContext)
}

export const Todoprovider = ToDoContext.Provider