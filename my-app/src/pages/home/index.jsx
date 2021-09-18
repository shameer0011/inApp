import { useStyles } from "./style";
import ArticlesList from '../../components/articlesList/articlesList';
import { getItems } from '../../servieces/serviece';
import { useCallback, useEffect, useState } from 'react'
import { saveReadLaterItem } from "../../actions/readllaterist";
import { useDispatch } from "react-redux";

const Home = () => {
    const classes = useStyles();
    const [result, setResult] = useState(null);
    const dispatch = useDispatch();

    const readLaterhandler = (article) => {
        console.log(article)
        dispatch(saveReadLaterItem(article))
    }

    const news = useCallback(async () => {
        try {
            const { results } = await getItems();
            const distinctSections = results.reduce((acc, article) => {
                if (!acc[article.section]) acc[article.section] = [];
                acc[article.section].push(article);
                return acc;
            }, {});
            console.log(distinctSections)
            setResult(distinctSections);

        } catch (error) {
            console.error(error);
        }
    }, []);

    useEffect(() => {
        news();
    }, [news]);

    return (
        <div>
            { result && <ArticlesList result={ result } readLaterhandler={ readLaterhandler } /> }
        </div>
    )
}

export default Home;