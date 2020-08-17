import React, { createContext, useReducer } from "react";
import { data } from "./data";
import { filterHelper } from "../helpers/filterHelpers";
import {sortData} from "../helpers/sortHelper";

const initialState = { data: data, filteredData: data, activeFilters: [] };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FILTER_DATA":
        return {
          ...state,
          // filteredData: [
          //   ...filterHelper(
          //     state.activeFilters.length > 0 ? state.filteredData : state.data,
          //     action.payload.type,
          //     action.payload.filterSelected
          //   )
          // ]
          filteredData: [...filterHelper(state.data, state.activeFilters)]
        };
      case "ADD_FILTER":
        return {
          ...state,
          activeFilters: [...state.activeFilters, action.payload]
        };
      case "REMOVE_FILTER":
        return {
          ...state,
          activeFilters: [
            ...state.activeFilters.filter(
              filter => filter.name !== action.payload
            )
          ]
        };
      case "SORT_DATA":
        return {
          ...state,
          filteredData: [...sortData(action.payload, state.filteredData)]
        };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
