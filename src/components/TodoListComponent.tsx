import React, { useContext, useCallback } from "react";
import AddTodoForm from "./AddTodoForm";
import { store } from "../store";
import {
  TodoItem,
  ToggleTodoType,
  RemoveTodoType,
  ApplyFilterType,
  FilterType
} from "../types";
import TodoItemComponent from "./TodoItemComponent";
import RenderCount from "./performance/RenderCount";
import { TodoListActionEnum } from "../ActionEnum";

// Filters Array
const availableFilters: Array<FilterType> = ["ALL", "ACTIVE", "COMPLETED"];

/**
 * Todo List Component
 */
const TodoList = () => {
  const { state, dispatch } = useContext(store);
  const { todoList, currentFilter } = state;

  // Toggle a Todo
  const onCheckedTodo = useCallback((id: number, checked: boolean) => {
    const action: ToggleTodoType = {
      type: TodoListActionEnum.TOGGLE_TODO_ITEM,
      payload: { id, checked }
    };
    dispatch(action);
  }, [dispatch]);

  // Remove a Todo
  const onRemoveTodo = useCallback((id: number) => {
    const action: RemoveTodoType = {
      type: TodoListActionEnum.REMOVE_TODO_ITEM,
      payload: id
    };
    dispatch(action);
  }, [dispatch]);

  // Apply new filter
  const onChangeFilter = useCallback((filter: FilterType) => {
    const action: ApplyFilterType = {
      type: TodoListActionEnum.APPLY_FILTER,
      payload: filter
    };
    dispatch(action);
  }, [dispatch]);

  const applyFilter = (todo: TodoItem) => {
    if (currentFilter === 'ALL') {
      return todo
    }
    if (currentFilter === 'ACTIVE' && !todo.checked) {
      return todo;
    }
    if (currentFilter === 'COMPLETED' && todo.checked) {
      return todo;
    }
    return null;
  }

  // Filters the list
  const filteredTodoList = todoList.filter((todo: TodoItem) => applyFilter(todo));

  return (
    <div className="todolist-container">
      <RenderCount componentName="todoList" />
      <AddTodoForm />
      {filteredTodoList.map((t: TodoItem) => (
        <TodoItemComponent
          key={t.id}
          todo={t}
          onCheckedTodo={onCheckedTodo}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
      <div className="btn-group mt-5" role="group" aria-label="Basic example">
        {availableFilters.map((filter: FilterType) => (
          <button
            type="button"
            key={filter}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              onChangeFilter(filter)
            }
            className={`btn ${
              filter === currentFilter ? "btn-secondary" : "btn-light"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
