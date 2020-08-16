import React, {useContext} from 'react';
import {Item} from "../../components/item/Item";
import {HomepageDiv} from "./homepage.styles";
import {store} from "../../context/store";
import {Filter} from "../../components/filter/Filter";

const Homepage = () => {
    const {dispatch, state} = useContext(store);

    // getBrands()


    return (
        <HomepageDiv>
                <Filter filterLabels={state.data.map(item => item.brand)}></Filter>
            <div className={'items'}>
                {state.filteredData.map(item => <Item key={item.id} item={item} />)}
            </div>

        </HomepageDiv>
    );
}

export default Homepage;
