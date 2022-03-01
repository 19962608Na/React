import { createStore, combineReducers, applyMiddleware   } from "redux";
import { Staffs } from "./staffs";
import { Departments } from "./departments";
import { Payroll } from './payroll';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from 'react-redux-form';
import { InitialNewStaff } from './forms';
import { DeptStaffs } from './deptstaffs';


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      staffs: Staffs,
      departments: Departments,
      deptStaffs: DeptStaffs,
      payroll: Payroll,
      ...createForms({
        newStaff: InitialNewStaff
      })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
}