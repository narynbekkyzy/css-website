import { Pagination } from "../../components/pagination/Pagination";

const ITEMS_PER_PAGE = 10;
const pageCounter = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface PostItem {
  index: number;
  sortID: number;
}

function tempPage() : JSX.Element {
//     const [currentType, setCurrentType] = useState(0);

//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [RealPageCounter, setPageCounter] = useState<number[]>(pageCounter);

//   const [currentBlog, setCurrentBlog] = useState<string>("");
//   const [currentPost, setCurrentPost] = useState<PostItem>();
    // const loadPage = (page: number, items: PostItem[]) => {
    //     const newItems = items.filter(
    //       (item, index) =>
    //         index >= page * ITEMS_PER_PAGE - ITEMS_PER_PAGE &&
    //         index < page * ITEMS_PER_PAGE
    //     );
    
    //     newItems.sort((a, b) => b.sortID - a.sortID);
    
    //     setCurrentPage(page);
        
    //   };

    return (

        <>
        <div className="Blog-Body-Pagination">
        <Pagination
          currentPage={1}
          pagesArray={[1, 2, 3, 4, 5, 6]}
          items={[1, 2, 3, 4, 5, 6]}
          loadPage={loadPage}
        />
      </div>
        </>
    )
}