import { useParams } from 'react-router-dom';
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

export const NewsPage = ({match}) => {
    const params = useParams();
    const category = params.category || 'all';

    return (
        <div>
            <Categories/>
            <NewsList category={category}/>
        </div>
    )
}
