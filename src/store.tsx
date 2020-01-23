import React, { createContext, useReducer } from "react";
import { TodoActionType, todoReducers } from "./reducers/TodoReducers";
import { TodoListState } from "./types";

type StateProviderProps = {
  children: React.ReactNode;
};

const defaultState = [
  {
    id: 1,
    name: "Réussir le test",
    checked: false
  },
  {
    id: 2,
    name: "Allez boire un verre",
    checked: true
  }
];

// Initial State
const initialState: TodoListState = {
  todoList: defaultState,
  currentFilter: "ALL"
};

// Create The React Context with initial State
const defaultDispatch: React.Dispatch<TodoActionType> = () => initialState; // we never actually use this
const store = createContext({ state: initialState, dispatch: defaultDispatch });

const { Provider } = store;

/**
 * State Provider
 * @param param0
 */
const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer<
    React.Reducer<TodoListState, TodoActionType>
  >(todoReducers, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
