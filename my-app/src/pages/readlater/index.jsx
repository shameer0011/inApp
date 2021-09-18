import React from 'react'
import { useStyles } from "./style";
import ArticlesList from '../../components/articlesList/articlesList';
export const ReadLater = () => {
    const classes = useStyles();
    return (
        <div>
            <ArticlesList />
        </div>
    )
}
export default ReadLater;
