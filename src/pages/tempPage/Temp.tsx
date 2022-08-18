import { useState } from "react";
import { Pagination } from "../../components/pagination/Pagination";
import data from "../../content/numbers.json";

const ITEMS_PER_PAGE = 10;
const pageCounter = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface PostItem {
  index: number;
  sortID: number;
}

export function TempPage(): JSX.Element {
  //     const [currentType, setCurrentType] = useState(0);

  //   const [currentPage, setCurrentPage] = useState<number>(1);
  //   const [RealPageCounter, setPageCounter] = useState<number[]>(pageCounter);

  //   const [currentBlog, setCurrentBlog] = useState<string>("");
  //   const [currentPost, setCurrentPost] = useState<PostItem>();
  //     const loadPage = (page: number, items: PostItem[]) => {
  //         const newItems = items.filter(
  //           (item, index) =>
  //             index >= page * ITEMS_PER_PAGE - ITEMS_PER_PAGE &&
  //             index < page * ITEMS_PER_PAGE
  //         );

  //         newItems.sort((a, b) => b.sortID - a.sortID);

  //         setCurrentPage(page);

  //       };

  //   let second: String = "Hello";

  //   function setSecond(s: String) {
  //     second = s;
  //     alert (second);
  //   }

  //Use hooks to update UI
  const [first, setFirst] = useState("hello");

  const [contentToShow, setContentToShow] = useState(data.items);

  function filterContentToShow() {
    let temp = data.items;
   temp = temp.filter((item, index) => {
      if (index < 5) {
        return item;
      }
    });

    alert(temp);
    setContentToShow(temp);
  }

  console.log(data);

  return (
    <>
      <div className="Blog-Body-Pagination">
        {contentToShow.map((item, index) => {
          return (
            <button onClick={() => filterContentToShow()}>{item.title}</button>
          );
        })}

        {/* <Pagination
          currentPage={1}
          pagesArray={[1, 2, 3, 4, 5, 6]}
          items={[1, 2, 3, 4, 5, 6]}
          loadPage={loadPage}
        /> */}
      </div>
    </>
  );
}
