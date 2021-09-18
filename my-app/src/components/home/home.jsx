import React, { useEffect } from 'react'
import { getItems, postItem } from '../../servieces/serviece';
import { useStyles } from './homeStyle'

import PropTypes from 'prop-types';
import SectionList from '../sectionListing/sectionList';
import Articles from '../newArticles.jsx/articles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={ `simple-tabpanel-${index}` }
            aria-labelledby={ `simple-tab-${index}` }
            { ...other }
        >
            { value === index && (
                <Box p={ 3 }>
                    <Typography>{ children }</Typography>
                </Box>
            ) }
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Home = () => {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const datas = {
        title: "titlesss 102",
        userid: "useriduuuu",
        body: "boodiesuuu"
    }
    //   get
    useEffect(async () => {
        try {
            var quote = await getItems();
            console.log(quote);
        } catch (error) {
            console.error(error);
        }
    }, [])
    //post
    useEffect(async () => {
        try {
            var quote = await postItem(datas);
            console.log(quote, "ffff");
        } catch (error) {
            console.error(error);
        }
    }, [])

    return (
        <div className={ classes.root }>
            <AppBar position="static">
                <Tabs value={ value } onChange={ handleChange } aria-label="simple tabs example">
                    <Tab label="Item One" { ...a11yProps(0) } />
                    <Tab label="Item Two" { ...a11yProps(1) } style={ { textAlign: "center" } } />
                </Tabs>
            </AppBar>
            <TabPanel value={ value } index={ 0 }>
                <SectionList />
            </TabPanel>
            <TabPanel value={ value } index={ 1 }>
                <Articles />
            </TabPanel>

        </div>
    )
}
export default Home;
