// selectors.js
import { selector } from "recoil";
import * as apiTodo from "./api"; // Nhập các hàm API
import { todoListState } from "./atom"; // Nhập atom cho danh sách todos

// Selector để lấy danh sách todos từ API
export const fetchTodosSelector = selector({
  key: "fetchTodosSelector",
  get: async () => {
    try {
      const result = await apiTodo.todoGet();
      return result || []; // Trả về kết quả hoặc mảng rỗng
    } catch (error) {
      console.error("Failed to fetch todos:", error);
      return [];
    }
  },
});

// Selector để thêm todo
export const addTodoSelector = selector({
  key: "addTodoSelector",
  set: async ({ get, set }, newTodo) => {
    try {
      const response = await apiTodo.addTodo(newTodo); // Gọi API để thêm todo
      const currentTodos = get(todoListState); // Lấy danh sách todos hiện tại
      set(todoListState, [...currentTodos, response]); // Cập nhật danh sách todos
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  },
});

// Selector để chỉnh sửa todo
export const editTodoSelector = selector({
  key: "editTodoSelector",
  set: async ({ get, set }, updatedTodo) => {
    try {
      const response = await apiTodo.editTodo(updatedTodo); // Gọi API để chỉnh sửa todo
      const currentTodos = get(todoListState); // Lấy danh sách todos hiện tại
      const updatedTodos = currentTodos.map((todo) =>
        todo.id === updatedTodo.id ? response : todo // Cập nhật todo đã sửa
      );
      set(todoListState, updatedTodos); // Cập nhật danh sách todos
    } catch (error) {
      console.error("Failed to edit todo:", error);
    }
  },
});

// Selector để xóa todo
export const deleteTodoSelector = selector({
  key: "deleteTodoSelector",
  set: async ({ get, set }, id) => {
    try {
      await apiTodo.deleteTodo(id); // Gọi API để xóa todo
      const currentTodos = get(todoListState); // Lấy danh sách todos hiện tại
      const updatedTodos = currentTodos.filter((todo) => todo.id !== id); // Cập nhật danh sách todos
      set(todoListState, updatedTodos); // Cập nhật danh sách todos
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  },
});
