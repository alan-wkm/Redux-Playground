import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodosState {
    todos: Todo[];
}

const initialState: TodosState = {
    todos: []
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>) {
            // TODO: implement adding a new todo
        },
        toggleTodo(state, action: PayloadAction<string>) {
            // TODO: implement toggling completed status by id
        },
        deleteTodo(state, action: PayloadAction<string>) {
            // TODO: implement deleting a todo by id
        }
    }
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
