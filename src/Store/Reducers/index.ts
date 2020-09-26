import {combineReducers} from "redux";
import characterReducer from "../Characters/Slice";

const RootReducer = combineReducers({
  characterReducer
});

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>;
