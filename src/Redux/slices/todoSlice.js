import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        newTodos:[],
        progressTodos:[],
        completeTodos:[],
        cancelledTodos:[]
    },
    reducers:{
        createNewTodo:(state, action)=>{
            state.newTodos = action.payload
        },
        createProgressTodo:(state, action)=>{
            state.progressTodos = action.payload
        },
        createCompleteTodo:(state, action)=>{
            state.completeTodos = action.payload
        },
        createCancelledTodo:(state, action)=>{
            state.cancelledTodos = action.payload
        }
    }
})
export const {createNewTodo, createProgressTodo, createCompleteTodo, createCancelledTodo} = todoSlice.actions
export default todoSlice.reducer