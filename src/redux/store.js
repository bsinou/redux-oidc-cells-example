import { createStore, applyMiddleware, compose } from "redux";
import { loadUser } from "redux-oidc";

import reducer, {loggerMiddleware} from "./reducer";
import userManager from "./userManager";

// Enable Redux devtool in dev mode
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(loggerMiddleware))(createStore);
const initialState = {};
const store = createStoreWithMiddleware(reducer, initialState);

export default store;

// Will try to reconnect when browsing back to this SPA.
loadUser(store, userManager);
