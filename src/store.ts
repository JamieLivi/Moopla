import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import propertiesReducer from './redux/reducers';
const rootReducer = combineReducers({
  propertiesReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
