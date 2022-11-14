import { useParams } from "react-router-dom";
import Categories from "./Categories";
import NewsList from "./NewsList";

export const NewsPage = ({ match }) => {
  const params = useParams();
  const category = params.category || "all";

  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

