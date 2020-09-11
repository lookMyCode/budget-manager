import { combineReducers } from "redux";

import incomeReducer from './reducers/incomeReducer';
import expensesReducer from './reducers/expensesReducer';


const rootReducer = combineReducers({
  income: incomeReducer,
  expenses: expensesReducer,
});

export default rootReducer;