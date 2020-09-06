import { combineReducers } from "redux";

import incomeReducer from './reducers/incomeReducer';
import expensesReducer from './reducers/expensesReducer';
import incomeCategoriesReducer from './reducers/expensesReducer';
import expensesCategoriesReducer from './reducers/expensesReducer';


const rootReducer = combineReducers({
  income: incomeReducer,
  expenses: expensesReducer,
  incomeCategories: incomeCategoriesReducer,
  expensesCategories: expensesCategoriesReducer
});

export default rootReducer;