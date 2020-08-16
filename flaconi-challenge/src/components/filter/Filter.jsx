import React, {useState, useRef, useEffect} from 'react';
import {FilterDiv} from './filter.styles';

export const Filter = ({filterLabels}) => {
    const [showFilter, setShowFilter] = useState(false);
    const [filterTypes, setFilterType] = useState([]);
    // const wrapperRef = useRef()
    useEffect(() => {
        const uniqueFilters = new Set([...filterLabels])
        const filterTypesData = [...uniqueFilters].map(filter => ({checked: false, name: filter}))
        setFilterType((prevState => [...filterTypesData]))
    }, [])
    // console.log(wrapperRef)
    const onShowFilter = () => {
        setShowFilter((prevState => !prevState))
    }

    return (
        <FilterDiv>
                <div className={"dropdown-button noselect"} onClick={onShowFilter}>
                    <div className={"dropdown-label"} >Brands</div>
                    <div className={"dropdown-quantity"}></div>
                    <i className={"fa fa-filter"}></i>
                </div>
                <div className={"dropdown-list"} style={{display: showFilter ? 'block' : 'none'}} >
                    <ul>
                        {filterTypes.map(filter => <li key={filter.name + Math.random()}>
                            <input name={filter.name} type="checkbox"/>
                            <label htmlFor={filter.name}>
                                {filter.name}
                            </label>
                        </li>)}
                    </ul>
                </div>
        </FilterDiv>
    )
}
