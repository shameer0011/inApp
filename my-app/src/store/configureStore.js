import { createStore, combineReducers } from "redux";
// import imageReducers from "../Reducer/image_reducer";
// import toDoReducers from "../Reducer/todo_reducer";
import completeTodoReducer from "../reducers/completeReducer";
const configureStore = () => {
  const store = createStore(
    combineReducers({
      //   todolist: toDoReducers,
      completeTodoList: completeTodoReducer,
      //   imageReducersList: imageReducers,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
export default configureStore;
