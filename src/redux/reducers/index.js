import {combineReducers} from "redux";

import users from "./users";

import itemsData from "./Items";

import cartItemsData from "./cartData";

const rootReducer =  combineReducers({
    users,
    itemsData,
    cartItemsData
});

export default rootReducer;