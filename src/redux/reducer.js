import { reducer as oidcReducer } from 'redux-oidc';
import { combineReducers } from 'redux';

// Add your own reducers here.
const reducer = combineReducers(
  {
    oidc: oidcReducer
  }
);

export default reducer;

// A dummy logger middleware
export const loggerMiddleware = store => next => action => {
  console.log("Action type:", action.type);
  console.log("Action payload:", action.payload);
  console.log("State before:", store.getState());
  next(action);
  console.log("State after:", store.getState());
};
