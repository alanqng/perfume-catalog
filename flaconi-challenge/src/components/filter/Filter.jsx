import React, { useState, useRef, useEffect, useContext } from "react";
import { FilterDiv } from "./filter.styles";
import { CustomButton } from "../Custom-Button/CustomButton";
import { store } from "../../context/store";

export const Filter = ({ filterLabels, type, title }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [filterTypes, setFilterType] = useState([]);
  const [filterSelected, setFilterSelected] = useState([]);
  const { dispatch, state } = useContext(store);
  // const wrapperRef = useRef()
  useEffect(() => {
    const uniqueFilters = new Set([...filterLabels]);
    const filterTypesData = [...uniqueFilters].map(filter => ({
      checked: false,
      name: filter
    }));
    setFilterType(prevState => [...filterTypesData]);
  }, []);
  // console.log(wrapperRef)
  const onShowFilter = () => {
    setShowFilter(prevState => !prevState);
  };

  const onFilter = () => {
    console.warn(filterSelected)
    dispatch({ type: "FILTER_DATA", payload: {filterSelected, type} });
    onShowFilter()
    console.log("working");
  };

  const onSelectFilter = event => {
    const { name } = event.target
    if (filterSelected.includes(name)) {
      setFilterSelected((prevState => [...prevState.filter(filter => filter !== name)]))
      dispatch({type: 'REMOVE_FILTER', payload: name})
    } else {
      setFilterSelected(prevState => [...prevState, name])
      dispatch({type: 'ADD_FILTER', payload: name})
    }
  };

  const checked = (name) => {
    if (filterSelected.includes(name)) {
      return true
    }
    return false
  }

  return (
    <FilterDiv>
      <div className={"dropdown-button noselect"} onClick={onShowFilter}>
        <div className={"dropdown-label"}>{title}</div>
        <div className={"dropdown-quantity"}></div>
        <i className={"fa fa-filter"}></i>
      </div>
      <div
        className={"dropdown-list"}
        style={{ display: showFilter ? "block" : "none" }}
      >
        <ul>
          {filterTypes.map(filter => (
            <li key={filter.name + Math.random()}>
              <input
                onChange={(e) => onSelectFilter(e)}
                name={filter.name}
                type="checkbox"
                checked={checked(filter.name)}
              />
              <label htmlFor={filter.name}>{filter.name}</label>
            </li>
          ))}
        </ul>
        <CustomButton type="button" onClick={onFilter} title={"Filter"} />
      </div>
    </FilterDiv>
  );
};
