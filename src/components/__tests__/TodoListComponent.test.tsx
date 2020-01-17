import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoListComponent from "../TodoListComponent";
import { store } from "../../store";
import { TodoListState } from "../../types";

// MOCK Todos List
const todos = [
  {
    id: 1,
    name: "MyTodo",
    checked: true
  },
  {
    id: 2,
    name: "My Second Todo",
    checked: false
  }
];

/**
 * Render TodoListComponent with React Context Mock
 * @param state 
 */
const renderTodoList = (state: TodoListState) => {
    const dispatch = jest.fn();
    return render(
        <store.Provider value={{state, dispatch}}>
          <TodoListComponent />
        </store.Provider>
    )
}

describe("Todo List Component Executions test", () => {
  test("Correct Display", () => {
    // Prepare
    const state: TodoListState = {
        todoList: todos,
        currentFilter: 'ALL'
    }

    // Act
    const { getByTestId } = renderTodoList(state);
    
    // Asserts
  });

  test("Add Todo Behaviour", () => {
    // Prepare
    const state: TodoListState = {
        todoList: todos,
        currentFilter: 'ALL'
    }

    // Act
    const { getByTestId } = renderTodoList(state);

    // Asserts
  });
});
