import { combineReducers } from "redux";

import Reducer from "./Reducer";

const RootReducer = combineReducers({
    app: Reducer,
});

export default RootReducer;
