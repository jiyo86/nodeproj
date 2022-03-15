import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./userReducer";
import thunk from "redux-thunk";

const rootreducer = combineReducers({
  user: userReducer,
});
const store = createStore(rootreducer, applyMiddleware(thunk));
export default store;
