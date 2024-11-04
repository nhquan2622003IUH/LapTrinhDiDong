// api
import React from "react";
import axios from "axios";
export const todoGet = async () => {
  try {
    const { data: response } = await axios.get(
      "https://66fc8f65c3a184a84d174ff9.mockapi.io/todo"
    );
    return response;
  } catch (error) {
    console.error(error.message);
  }
};

export const addTodo = async (newTodo) => {
  try {
    const { data: response } = await axios.post(
      "https://66fc8f65c3a184a84d174ff9.mockapi.io/todo",
      newTodo
    );
    return response;
  } catch (error) {
    console.error(error.message);
  }
};
export const editTodo = async (todo) => {
  try {
    const { data: response } = await axios.put(
      "https://66fc8f65c3a184a84d174ff9.mockapi.io/todo/" + todo.id,
      todo
    );
    return response;
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteTodo = async (id) => {
  try {
    const { data: response } = await axios.delete(
      "https://66fc8f65c3a184a84d174ff9.mockapi.io/todo/" + id
    );
    return response;
  } catch (error) {
    console.error(error.message);
  }
};