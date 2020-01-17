import React, { useState, useContext } from "react";
import { store } from "../store";
import { AddTodoType } from "../types";
import { TodoListActionEnum } from "../ActionEnum";
import RenderCount from "./performance/RenderCount";

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
};

/**
 * Add Todo Form
 */
const AddTodoForm: React.FC = () => {
  const [name, setName] = useState<string>();
  const { dispatch } = useContext(store);

  // When Change TodoName
  const onChangeTodoName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  //  When Clicking on AddItem
  const onAddItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (name) {
      const action: AddTodoType = {
        type: TodoListActionEnum.ADD_TODO_ITEM,
        payload: {
          id: getRandomInt(10000),
          name,
          checked: false
        }
      };
      return dispatch(action);
    }
    alert("Name is mandatory");
  };

  return (
    <div>
      <RenderCount componentName="AddTodo" />
      <input
        type="text"
        onChange={onChangeTodoName}
        placeholder="Fill a task"
        className="mr-2"
        value={name}
      />
      <button onClick={onAddItem} className="btn btn-primary">
        Add this todo
      </button>
    </div>
  );
};

export default AddTodoForm;
