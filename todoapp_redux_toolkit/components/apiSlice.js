// redux/apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://66fc8f65c3a184a84d174ff9.mockapi.io/todo';

// Fetch all todos
export const fetchData = createAsyncThunk('api/fetchData', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Create a new todo
export const createTodo = createAsyncThunk('api/createTodo', async (newTodo) => {
  const response = await axios.post(API_URL, newTodo);
  return response.data;
});

// Delete a todo by ID
export const deleteTodo = createAsyncThunk('api/deleteTodo', async (todoId) => {
  await axios.delete(`${API_URL}/${todoId}`);
  return todoId;
});

// Update a todo by ID
export const updateTodo = createAsyncThunk('api/updateTodo', async ({ id, updatedData }) => {
  const response = await axios.put(`${API_URL}/${id}`, updatedData);
  return response.data;
});

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch todos
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Create todo
    builder
      .addCase(createTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Delete todo
    builder
      .addCase(deleteTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((todo) => todo.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Update todo
    builder
      .addCase(updateTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.data.findIndex((todo) => todo.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default apiSlice;
