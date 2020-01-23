import { todoReducers } from "../TodoReducers";
import {
  TodoListState,
  AddTodoType,
  RemoveTodoType,
  ToggleTodoType,
  ApplyFilterType
} from "../../types";
import { TodoListActionEnum } from "../../ActionEnum";

describe("TodoReducers Test Execution", () => {
  test("Add Todo", () => {
    // Prepare
    const state: TodoListState = {
      todoList: [],
      currentFilter: "ALL"
    };

    const action: AddTodoType = {
      type: TodoListActionEnum.ADD_TODO_ITEM,
      payload: {
        id: 1,
        name: "My Todo"
      }
    };

    // Act
    const newState = todoReducers(state, action);

    // Assert
    expect(newState.todoList).toHaveLength(1);
    expect(newState.todoList[0]).toEqual(action.payload);
  });

  test("Remove Todo", () => {
    // Prepare
    const state: TodoListState = {
      todoList: [
        {
          id: 1,
          name: "My Todo"
        }
      ],
      currentFilter: "ALL"
    };

    const action: RemoveTodoType = {
      type: TodoListActionEnum.REMOVE_TODO_ITEM,
      payload: 1
    };

    // Act
    const newState = todoReducers(state, action);

    // Assert
    expect(newState.todoList).toHaveLength(0);
  });

  test("Toggle Todo", () => {
    // Prepare
    const state: TodoListState = {
      todoList: [
        {
          id: 1,
          name: "My Todo"
        }
      ],
      currentFilter: "ALL"
    };

    const action: ToggleTodoType = {
      type: TodoListActionEnum.TOGGLE_TODO_ITEM,
      payload: {
        id: 1,
        checked: true
      }
    };

    // Act
    const newState = todoReducers(state, action);

    // Assert
    expect(newState.todoList).toHaveLength(1);
    expect(newState.todoList[0]).toEqual({
      ...state.todoList[0],
      checked: true
    });
    // Check not mutable previous state
    expect(state.todoList[0]).toEqual({
      ...state.todoList[0]
    });
  });

  test("Apply Filter", () => {
    // Prepare
    const state: TodoListState = {
      todoList: [
        {
          id: 1,
          name: "My Todo"
        }
      ],
      currentFilter: "ALL"
    };

    const newFilter = "ACTIVE";

    const action: ApplyFilterType = {
      type: TodoListActionEnum.APPLY_FILTER,
      payload: newFilter
    };

    // Act
    const newState = todoReducers(state, action);

    // Assert
    expect(newState.currentFilter).toEqual(newFilter);
  });
});
