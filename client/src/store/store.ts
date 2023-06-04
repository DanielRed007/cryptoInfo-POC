import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { configReducer } from './reducers/config.reducer';

const middleware = [thunk];

const rootReducer = combineReducers({
  config: configReducer
});

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  composeWithDevTools()
);

const store = createStore(rootReducer, composedEnhancers);

export default store;


