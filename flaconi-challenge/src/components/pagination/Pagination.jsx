import React from "react";
import { PaginatorContainer } from "./pagination.styles";

export const Pagination = ({ postsPerPage, totalPosts, paginate, pageNumber }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const nextPage = () => {
        if (pageNumber < Math.ceil(totalPosts / postsPerPage)) {
            paginate(pageNumber + 1)
        } else {
            return
        }
    };

    const previousPage = () => {
        if (pageNumber > 1) {
            paginate(pageNumber - 1)
        } else {
            return;
        }
    };

    return (
        <PaginatorContainer>
            <li><a href="#" onClick={previousPage}>&laquo;</a></li>
            {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a onClick={() => paginate(number)} href='#' className='page-link'>
                        {number}
                    </a>
                </li>
            ))}
            <li><a href="#" onClick={nextPage}>&raquo;</a></li>
        </PaginatorContainer>
    )
}
