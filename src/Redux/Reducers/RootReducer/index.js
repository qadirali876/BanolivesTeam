import {combineReducers} from 'redux';
import authReducer from '../WhiteListReds/authRed';
import homeReducer from '../WhiteListReds/homeRed';

export const rootReducer = combineReducers({
  auth: authReducer,
  homeRed: homeReducer,
  // userLevelR : userLevelReducerr
});
