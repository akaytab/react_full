import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../feature/todo.slice'


export const store =configureStore({
    reducer:todoReducer
})