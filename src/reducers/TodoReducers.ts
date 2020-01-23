import {
  TodoListState,
  AddTodoType,
  RemoveTodoType,
  ToggleTodoType,
  TodoItem,
  ApplyFilterType
} from "../types";
import { TodoListActionEnum } from "../ActionEnum";

// Define Action Type
export type TodoActionType =
  | AddTodoType
  | RemoveTodoType
  | ToggleTodoType
  | ApplyFilterType;

/**
 * Todo Reducers
 * @param state
 * @param action
 */
export const todoReducers = (state: TodoListState, action: TodoActionType) => {
  switch (action.type) {
    case TodoListActionEnum.ADD_TODO_ITEM:
      return Object.assign({}, state, {
        todoList: [...state.todoList, action.payload]
      });
    case TodoListActionEnum.REMOVE_TODO_ITEM:
      return Object.assign({}, state, {
        todoList: state.todoList.filter(
          (t: TodoItem) => t.id !== action.payload
        )
      });
    case TodoListActionEnum.TOGGLE_TODO_ITEM:
      return Object.assign({}, state, {
        todoList: state.todoList.map((t: TodoItem) => {
          const todo = Object.assign({}, t);
          if (todo.id === action.payload.id) {
            todo.checked = action.payload.checked;
          }
          return todo;
        })
      });
    case TodoListActionEnum.APPLY_FILTER:
      return Object.assign({}, state, {
        currentFilter: action.payload
      });
    default:
      throw new Error();
  }
};
