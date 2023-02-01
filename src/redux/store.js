import { createStore } from "redux";

import storeData from "./reducers/users";

const store = createStore(
    storeData,
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop
);

export default store;