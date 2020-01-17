/********************* */
/*****   React   *** */
/********************* */
// Function Comp 
const TodoItemComponent: React.FC<TodoItemComponentProps> = ({ todo, onCheckedTodo, onRemoveTodo }) => {


/********************* */
/*****   Events   *** */
/********************* */
// Click
React.MouseEvent<HTMLButtonElement, MouseEvent>
// Change
React.ChangeEvent<HTMLInputElement>
// Submit
React.FormEvent<HTMLFormElement>

/********************* */
/*****   Hooks   ***** */
/********************* */
// use State
const [user, setUser] = React.useState<IUser | null>(null);

// use Ref
const ref1 = useRef<HTMLElement>(null!);

// use Reducer
const [state, dispatch] = useReducer<React.Reducer<TodoListState, TodoActionType>>(todoReducers, initialState);

// use Effect
Nothing to do

// Create Context
const defaultDispatch: React.Dispatch<TodoActionType> = () => initialState; // we never actually use this
const store = createContext({ state: initialState, dispatch: defaultDispatch });

/*************************** */
/*****   Action Type   ***** */
/*************************** */
export type AddTodoType {
    type: TodoListActionEnum.ADD_TODO_ITEM;
    payload: TodoItem;
}

// Type Inline
export type FilterType = "ALL" | "ACTIVE" | "COMPLETED";
