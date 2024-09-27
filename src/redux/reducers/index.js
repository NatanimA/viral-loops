import { combineReducers } from 'redux';
import styleReducer from './styleReducer';

const rootReducer = combineReducers({
    accordion: styleReducer,
});

export default rootReducer;
