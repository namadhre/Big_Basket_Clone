import {combineReducers} from "redux";

import users from "./users";

import itemsData from "./Items";

const rootReducer =  combineReducers({
    users,
    itemsData
});

export default rootReducer;