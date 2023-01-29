/**
    This Pagination.tsx file is used for creating pagination for every card session
    It is imported by  PaginationApplicator.tsx
        - interface Pagination() -------------> the main prop for function Pagination()
        - function Pagination() --------------> Function to display numbers
            + function calculatePages()  -----> calculate the total number of pages
            + function openNewPage() ---------> set new page to current page and calculate the items
            + function filterElements() ------> get the elements from new page
*/

import { useEffect, useState } from "react";

import threeDots from "../../images/three-dots.svg";
import rightArrow from "../../images/rightArrow.svg";
import leftArrow from "../../images/leftArrow.svg";
import "./Pagination.css";

interface Pagination {
  data: JSX.Element[];  //must be in array form
  class: string;        //ClassName for innermost container of pagination content
  pageSize: number;     //number of items in page
}

export function Pagination(props: Pagination): JSX.Element {

  let dotsPut = false;

  const [contentToShow, setContentToShow] = useState(props.data);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  let numberPages = props.data.length;
  let ITEMS_PER_PAGE = props.pageSize;

  // Calculating the number of pages:
  //    1. if diviable -> take the number
  //    2. if not -> take another page for the rest of items
  function calculatePages() {
    let pages = numberPages / ITEMS_PER_PAGE; // 20 / 3 = 6
    if (numberPages % ITEMS_PER_PAGE !== 0) { // 20 % 3 = 2 !== 0 -> 6 + 1 = 7
      pages++;
    }

    // put the number of pages into an array
    // pagesArray = [1,2,3,4,5,6,7,8]
    let pagesArray = [];
    for (let i = 1; i <= pages; i++) {
      pagesArray.push(i);
    }

    setPages(pagesArray);
  }

  // Function openNewPage() is used to set the state of new page if clicked
  //    @param: new page that was clicked
  function openNewPage(page: number) {
    if (page > 0 && page <= pages.length) {
      setCurrentPage(page);
      filterElements(page);
    }
  }

  // Function fillterElements() is used to sort the items in new page
  //    @param: new page that was clicked
  function filterElements(page: number) {
    // calculate the start and end indices
    let start = page * ITEMS_PER_PAGE - ITEMS_PER_PAGE
    let end = page * ITEMS_PER_PAGE

    // get the content from start to end
    let newContent = props.data.filter((item, index) => index >= start && index < end)

    // set contentToShow to newContent just calculated
    setContentToShow(newContent);
  }

  useEffect(() => {
    filterElements(currentPage);
    calculatePages();

  }, []);

  return (
    <>
      <div className="Blog-Body-Pagination">

        {/* Display the current content */}
        <div className={props.class}>
          {contentToShow}
        </div>

        <div className="pagination-align">

          {/* left button to go to the previous page */}
          <button className="pagination" onClick={() => { openNewPage(currentPage - 1) }}> <img alt="<" src={rightArrow}/> </button>

          {/* display pages */}
          {pages.map((pageNumber, index) => {
            // if not the first, last, not 3 pages before current page, not 1 page after current page
            if (
              index !== 0 &&
              index !== pages.length - 1 &&
              !(index >= currentPage - 3 && index <= currentPage + 1)
            ) {
              // put ... instead of the number (put 1 ... for each side if applicable)
              if (!dotsPut) {
                dotsPut = true;
                return <img alt="..." src={threeDots} />;
              }
              else return null;
            }
            // else set dot to false 
            else dotsPut = false;
            
            // each page is a button. if click to current page, not do anything
            return (
              <button
                onClick={() => { openNewPage(pageNumber) }}
                className={currentPage === pageNumber ? "selectedPagination" : "pagination"}>
                {pageNumber}
              </button>

            );
          })
          }

          {/* right arrow to go to next page */}
          <button className="pagination" onClick={() => { openNewPage(currentPage + 1) }}> <img alt=">" src={leftArrow}/> </button>

        </div>
      </div>
    </>
  );
}
