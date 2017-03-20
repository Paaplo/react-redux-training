import { combineReducers } from 'redux'
import memory from './memoryReducer'

const rootReducer = combineReducers({
    memory
});

export default rootReducer;