import React, {useContext} from "react";
import { SortContainer } from "./sort.styles";
import {store} from "../../context/store";

export const Sort = () => {
    const { dispatch, state } = useContext(store);

    const onSort = (value) => {
        console.log(value)
        dispatch({type: 'SORT_DATA', payload: value})
    };

    return (
        <SortContainer>
            <label htmlFor="sort">Sort by:</label>
            <select onChange={(e) => onSort(e.target.value)} name="sort" id="sort">
                <option value="rating">Rating</option>
                <option value="namea-z">Name A-Z</option>
                <option value="namez-a">Name Z-A</option>
            </select>
        </SortContainer>
    )
}
