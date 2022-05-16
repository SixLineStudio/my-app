import { usePages } from "./pagesHoock";
import clasess from "./PagesList.module.css";

const PagesList = ({ maxPages, currentPage, onClick, pages }) => {
  let buttons = usePages(maxPages, currentPage, onClick, pages);
  return <div className={clasess.pages}>{buttons}</div>;
};

export default PagesList;
