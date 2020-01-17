import { TodoListActionEnum } from "./ActionEnum";

// Model represent todo Item
export interface TodoItem {
  id: number;
  name: string;
  checked?: boolean;
}

export type FilterType = "ALL" | "ACTIVE" | "COMPLETED";

// Model Represent todo list state
export interface TodoListState {
  todoList: TodoItem[];
  currentFilter: FilterType;
}

export interface AddTodoType {
  type: TodoListActionEnum.ADD_TODO_ITEM;
  payload: TodoItem;
}

export interface RemoveTodoType {
  type: TodoListActionEnum.REMOVE_TODO_ITEM;
  payload: number;
}

export interface ToggleTodoType {
  type: TodoListActionEnum.TOGGLE_TODO_ITEM;
  payload: {
    id: number;
    checked: boolean;
  };
}

export interface ApplyFilterType {
  type: TodoListActionEnum.APPLY_FILTER;
  payload: FilterType;
}
