import React from "react";
import "./App.css";
import { StateProvider } from "./store";
import TodoList from "./components/TodoListComponent";

/**
 * My App
 */
const App: React.FC = () => {
  return (
    <div className="App">
      <StateProvider>
        <TodoList />
      </StateProvider>
    </div>
  );
};

export default App;
