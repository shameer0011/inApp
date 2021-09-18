import { useStyles } from "./style";
import ArticlesList from '../../components/articlesList/articlesList';
import { getItems } from '../../servieces/serviece';
import { useEffect } from 'react'

const Home = () => {
    const classes = useStyles();

    useEffect(async () => {
        try {
            var news = await getItems();
            console.log(news);
        } catch (error) {
            console.error(error);
        }
    }, [])


    return (
        <div>
            <ArticlesList />
        </div>
    )
}

export default Home;