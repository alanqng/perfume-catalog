import React, {createContext, useReducer} from 'react';
import {data} from "./data";

const initialState = { data: data, filteredData: data};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            // case 'action description':
            //     // const newState = // do something with the action
            //     return newState;
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }
