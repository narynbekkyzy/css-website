import threeDots from "../../images/threedot.png";
import "./Pagination.css";

//creating an object that includes the pages, an array to set # of pages
export interface PaginationProps {
  currentPage: number; //The current active page, defaults to first page
  pagesArray: number[]; //The number of items per page
  items: any[]; //total number of items to be pages (any means it can be any type such as number, string, object, etc)
  loadPage: (page: number, items: any[], moveUp: boolean) => void; //checks current page to be in
  
}
// JSX.Element : it says the type of return value of the function

export function Pagination({
  currentPage,
  pagesArray,
  loadPage,
  items,
}: PaginationProps): JSX.Element {
  let dotsPut = false;

  return (
    <div className="Generic-Pagination-Container">
      <span
        onClick={() => {
          if (currentPage !== 1) loadPage(currentPage - 1, items, true);
        }}
      >
        {/* <CustomButton
          type={"Default"}
          styleType={"Left-Arrow"}
          text={""}
       ></CustomButton> */}
        <button></button>
      </span>
      {pagesArray.map((page, index) => {
        if (
          index !== 0 &&
          index !== pagesArray.length - 1 &&
          !(index >= currentPage - 3 && index <= currentPage + 1)
        ) {
          if (!dotsPut) {
            dotsPut = true;
            return <img alt="..." src={threeDots}></img>;
          } else {
            return null;
          }
        } else {
          dotsPut = false;
          return (
            <span
              onClick={() => {
                loadPage(page, items, true);
              }}
            >
              {/* <CustomButton
                number={page}
                selectedButton={currentPage}
                type={"Default"}
                styleType={"Line"}
                text={page.toString()}
              ></CustomButton> */}
              <button>{page.toString()}</button>
            </span>
          );
        }
      })}
      <span
        onClick={() => {
          if (currentPage !== pagesArray.length)
            loadPage(currentPage + 1, items, true);
        }}
      >
        {/* <CustomButton
          type={"Default"}
          styleType={"Right-Arrow"}
          text={""}
        ></CustomButton> */}
        <button></button>
      </span>
    </div>
  );
}
