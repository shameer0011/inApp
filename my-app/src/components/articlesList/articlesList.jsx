import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Divider, Grid } from "@material-ui/core";
import Pagination from "../pagination";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={ `vertical-tabpanel-${index}` }
            aria-labelledby={ `vertical-tab-${index}` }
            { ...other }
        >
            { value === index && (
                <Box sx={ { p: 3 } }>
                    <Typography>{ children }</Typography>
                </Box>
            ) }
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}
const ArticlesList = (props) => {
    const { result, readLaterhandler, removeHandler } = props;
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={ { flexGrow: 1, bgcolor: "background.paper", display: "flex" } }>
                <Box>
                    <Typography variant="h6">Sections</Typography>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={ value }
                        onChange={ handleChange }
                        aria-label="Vertical tabs example"
                        sx={ { borderRight: 1, borderColor: "Boxider" } }
                    >
                        { Object.keys(result).map((item, index) => (
                            <Tab label={ item } key={ item } { ...a11yProps(index) } />
                        )) }
                    </Tabs>
                </Box>
                <Box>
                    <Typography variant="h6">Articles</Typography>

                    { Object.values(result).map((articles, index) => {
                        return (
                            <TabPanel value={ value } index={ index } key={ index }>
                                { " " }
                                {/* dont use index here*/ }
                                { articles.map((article) => (
                                    <>
                                        <Grid container spacing={ 2 }>
                                            <Grid item xs={ 3 }>
                                                <img src={ article.thumbnail_standard } />
                                            </Grid>
                                            <Grid item xs={ 6 }>
                                                <Box my={ 5 }>
                                                    <a target="_black" href={ article.url }>
                                                        { article.title }
                                                    </a>
                                                    <Box>{ article.abstract }</Box>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={ 3 }>
                                                <Button
                                                    variant="outlined"
                                                    color="primary"
                                                    onClick={ () => readLaterhandler ? readLaterhandler(article) : removeHandler(article)
                                                    }
                                                >
                                                    { readLaterhandler ? "Read later" : "Remove" }
                                                </Button>
                                            </Grid>
                                        </Grid>
                                        <Divider />
                                    </>
                                )) }
                            </TabPanel>
                        );
                    }) }
                </Box>
            </Box>
        </>
    );
};
export default ArticlesList;
