import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import logger from 'redux-logger';
import rootReducer from './reducer';
// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()
// Build the middleware for intercepting and dispatching navigation actions
const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history), logger];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
export default createStore(rootReducer, initialState, composedEnhancers);