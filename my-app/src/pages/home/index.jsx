import { useStyles } from "./style";
import ArticlesList from '../../components/articlesList/articlesList';
import { getItems } from '../../servieces/serviece';
import { useCallback, useEffect, useState } from 'react'
import { saveReadLaterItem } from "../../actions/readllaterist";
import { useDispatch } from "react-redux";
import Pagination from "../../components/pagination";
import { Box } from "@mui/system";

const Home = () => {
    const classes = useStyles();
    const [result, setResult] = useState(null);
    const [page, setPage] = useState(0);

    const dispatch = useDispatch();

    const readLaterhandler = (article) => {
        dispatch(saveReadLaterItem(article))
    }

    const paginateHandler = (direction) => {
        console.log(direction)
        if (direction === "next") {
            setPage((prev) => prev + 1)
        }
        if (direction === "prev") {
            setPage((prev) => prev - 1)
        }
    }


    const news = useCallback(async () => {
        try {
            const { results } = await getItems({ page });
            const distinctSections = results.reduce((acc, article) => {
                if (!acc[article.section]) acc[article.section] = [];
                acc[article.section].push(article);
                return acc;
            }, {});
            setResult(distinctSections);

        } catch (error) {
            console.error(error);
        }
    }, [page]);

    useEffect(() => {
        console.log(page)
        news();
    }, [page, news]);

    return (
        <div>
            { result && <ArticlesList result={ result } readLaterhandler={ readLaterhandler } /> }
            <Box display="flex" justifyContent="center">
                <Pagination paginateHandler={ paginateHandler } />
            </Box>


        </div>
    )
}

export default Home;