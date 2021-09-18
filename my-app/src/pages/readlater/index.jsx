import React, { useEffect, useState } from 'react'
import { useStyles } from "./style";
import ArticlesList from '../../components/articlesList/articlesList';
import { useSelector } from 'react-redux';
import { connect, useDispatch } from 'react-redux';
import { removeReadLaterItem } from '../../actions/readllaterist';

export const ReadLater = (props) => {
    const classes = useStyles();
    const { readlaterList } = props;
    const dispatch = useDispatch();
    const [result, setResult] = useState(null);
    const removeHandler = (data) => {
        console.log("datata", data)
        dispatch(removeReadLaterItem(data.title))

    }

    useEffect(() => {
        if (readlaterList) {
            const distinctSections = readlaterList.reduce((acc, article) => {
                if (!acc[article.section]) acc[article.section] = [];
                acc[article.section].push(article);
                return acc;
            }, {});
            console.log(distinctSections)
            setResult(distinctSections);
        }
    }, [readlaterList]);

    return (
        <div>
            { result && <ArticlesList result={ result } removeHandler={ removeHandler } /> }
        </div>
    )
}

const mapStatesToProp = (states) => ({
    readlaterList: states.readList
})

export default connect(mapStatesToProp)(ReadLater)