import { createStore, combineReducers } from "redux";
// import thunk from 'redux-thunk';
import ReadListReducer from "../reducers/readillaterist";

const configureStore = () => {
  return createStore(
    combineReducers({
      readList: ReadListReducer,
    })
    // applyMiddleware(thunk)
  );
};

export default configureStore;
