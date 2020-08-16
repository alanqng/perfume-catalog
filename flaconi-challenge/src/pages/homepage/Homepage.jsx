import React, { useContext } from "react";
import { Item } from "../../components/item/Item";
import { HomepageDiv } from "./homepage.styles";
import { store } from "../../context/store";
import { Filter } from "../../components/filter/Filter";

const Homepage = () => {
  const { dispatch, state } = useContext(store);

  return (
    <HomepageDiv>
        <div className={'filter-container'}>
            <Filter
                type={"brand"}
                title={"Brands"}
                filterLabels={state.data.map(item => item.brand)}
            />
            <Filter
                type={"type"}
                title={"Types"}
                filterLabels={state.data.map(item => item.type)}
            />
        </div>
      <div className={"items"}>
        {state.filteredData.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </HomepageDiv>
  );
};

export default Homepage;
