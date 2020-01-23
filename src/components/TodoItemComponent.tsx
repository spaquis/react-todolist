import React from "react";
import { TodoItem } from "../types";
import RenderCount from "./performance/RenderCount";

/**
 * Todo Item Props
 */
type TodoItemComponentProps = {
  todo: TodoItem;
  onCheckedTodo: (id: number, checked: boolean) => void;
  onRemoveTodo: (id: number) => void;
};

/**
 * Check Item (check box + name)
 */
const TodoItemComponent: React.FC<TodoItemComponentProps> = ({
  todo,
  onCheckedTodo,
  onRemoveTodo
}) => {
  // On Press Checked
  const onPressChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedTodo(todo.id, e.target.checked);
  };

  // On Press Remove
  const onPressRemove = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    onRemoveTodo(todo.id);
  };

  return (
    <>
      <RenderCount componentName={`TodoItem: ${todo.id}`} />
      <div
        data-testid="todo-container"
        className="d-flex flex-row justify-content-between align-items-center mt-2"
      >
        <div className="d-flex flex-row justify-content-start align-items-center mt-2">
          <input
            data-testid="todo-checkbox"
            type="checkbox"
            checked={todo.checked}
            className="mr-2"
            onChange={onPressChecked}
          />
          <span data-testid="todo-name">{todo.name}</span>
        </div>
        <button
          data-testid="todo-remove-button"
          onClick={onPressRemove}
          className="btn btn-danger"
        >
          Remove
        </button>
      </div>
    </>
  );
};

// const todoPropsAreEqual = (
//   prevTodo: Readonly<React.PropsWithChildren<TodoItemComponentProps>>,
//   nextTodo: Readonly<React.PropsWithChildren<TodoItemComponentProps>>
// ) => {
//   console.log(prevTodo);
//   console.log(nextTodo);
//   return (
//     prevTodo.todo.id === nextTodo.todo.id &&
//     prevTodo.todo.name === nextTodo.todo.name &&
//     prevTodo.todo.checked === nextTodo.todo.checked
//   );
// };

export default React.memo(TodoItemComponent);
