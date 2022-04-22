import  { createStore } from 'redux';
import { configureStore} from '@reduxjs/toolkit';
import authSlice from './auth';
import counterReducer from './counter';

const initialCounterState = { counter : 0 ,showCounter : true };


//alternative of above code  
const counterreducer = (state = initialCounterState , action) => {
    if(action.type === 'increment') {
        return {
            counter : state.counter + 1,
            showCounter : state.showCounter
        }
    }
    if(action.type === 'decrement') {
        return {
            counter : state.counter - 1,
            showCounter : state.showCounter
        }
    }
    if(action.type === 'increase') {
        return {
            counter : state.counter + action.payload,
            showCounter : state.showCounter
        }
    }
    if(action.type === 'toggle') {
        return {
            showCounter : !state.showCounter,
            counter : state.counter
        }
    }
    return state
};



const store = configureStore({
    reducer: { counter: counterReducer , auth : authSlice.reducer },
  });



export default store;