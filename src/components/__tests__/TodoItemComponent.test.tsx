import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TodoItemComponent from "../TodoItemComponent";

const todo = {
  id: 1,
  name: 'MyTodo',
  checked: true
}

describe("Todo Item Component Executions test", () => {
  test("Correct Display", () => {
    // Prepare
    const mockOnCheckedTodo = jest.fn();
    const mockOnRemoveTodo = jest.fn();
    
    // Act
    const { getByTestId } = render(
      <TodoItemComponent todo={todo} onCheckedTodo={mockOnCheckedTodo} onRemoveTodo={mockOnRemoveTodo} />
    );
    // Asserts
    const checkBox = getByTestId("todo-checkbox");
    expect(checkBox.checked).toBe(true);
    
    const todoName = getByTestId("todo-name");
    expect(todoName.innerHTML).toBe(todo.name);
  });

  test("Check a Todo", () => {
    // Prepare
    const mockOnCheckedTodo = jest.fn();
    const mockOnRemoveTodo = jest.fn();
    
    // Act
    const { getByTestId } = render(
      <TodoItemComponent todo={todo} onCheckedTodo={mockOnCheckedTodo} onRemoveTodo={mockOnRemoveTodo} />
    );
    
    const checkBox = getByTestId("todo-checkbox");
    fireEvent.click(checkBox);

    // Asserts
    expect(mockOnCheckedTodo).toBeCalledTimes(1);
    expect(mockOnCheckedTodo).toBeCalledWith(todo.id, false);
  });

  test("Remove a Todo", () => {
    // Prepare
    const mockOnCheckedTodo = jest.fn();
    const mockOnRemoveTodo = jest.fn();
    
    // Act
    const { getByTestId } = render(
      <TodoItemComponent todo={todo} onCheckedTodo={mockOnCheckedTodo} onRemoveTodo={mockOnRemoveTodo} />
    );
    
    const removeButton = getByTestId("todo-remove-button");
    fireEvent.click(removeButton);

    // Asserts
    expect(mockOnRemoveTodo).toBeCalledTimes(1);
    expect(mockOnRemoveTodo).toBeCalledWith(todo.id);
  });
});
