import React, { createContext, useReducer } from "react";
import { data } from "./data";
import { filterHelper } from "../helpers/filterHelpers";

const initialState = { data: data, filteredData: data, activeFilters: [] };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FILTER_DATA":
        return {
          ...state,
          filteredData: [
            ...filterHelper(
              state.activeFilters.length > 0 ? state.filteredData : state.data,
              action.payload.type,
              action.payload.filterSelected
            )
          ]
        };
      case "ADD_FILTER":
        console.log(state.activeFilters)
        console.log(action.payload)
        return {
          ...state,
          activeFilters: [...state.activeFilters, action.payload]
        };
        case "REMOVE_FILTER":
            return {
                ...state,
                activeFilters: [...state.activeFilters.filter(filter => filter !== action.payload)]
            };
      default:
        return state;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
