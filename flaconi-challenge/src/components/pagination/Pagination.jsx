import React from 'react';
import { PaginatorContainer } from './pagination.styles';

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  pageNumber
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    if (pageNumber < Math.ceil(totalPosts / postsPerPage)) {
      paginate(pageNumber + 1);
    }
  };

  const previousPage = () => {
    if (pageNumber > 1) {
      paginate(pageNumber - 1);
    }
  };

  return (
    <PaginatorContainer>
      <li>
        <a href="#" onClick={previousPage}>
          &laquo;
        </a>
      </li>
      {pageNumbers.map(number => (
        <li key={number} style={{fontWeight: pageNumber === number ? 'bold' : ''}}>
          <a onClick={() => paginate(number)} href="#">
            {number}
          </a>
        </li>
      ))}
      <li>
        <a href="#" onClick={nextPage}>
          &raquo;
        </a>
      </li>
    </PaginatorContainer>
  );
};
