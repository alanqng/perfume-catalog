import React, { useContext, useState } from "react";
import { Item } from "../../components/item/Item";
import { HomepageDiv } from "./homepage.styles";
import { store } from "../../context/store";
import { Filter } from "../../components/filter/Filter";
import { Pagination } from "../../components/pagination/Pagination";

const Homepage = () => {
  const { dispatch, state } = useContext(store);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = state.filteredData.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <HomepageDiv>
      <div className={"filter-container"}>
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
        {currentPosts.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </div>
        <div className={'paginator'}>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={state.filteredData.length}
                paginate={paginate}
                pageNumber={currentPage}
            />
        </div>

    </HomepageDiv>
  );
};

export default Homepage;
