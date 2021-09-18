import React from "react";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { IconButton } from "@material-ui/core";

const Pagination = (props) => {
    const { paginateHandler } = props;
    return (
        <div>
            <IconButton onClick={ () => paginateHandler("prev") }>
                <KeyboardArrowLeftIcon />{ " " }
            </IconButton>
            <IconButton onClick={ () => paginateHandler("next") }>
                <KeyboardArrowRightIcon />
            </IconButton>
        </div>
    );
};

Pagination.propTypes = {};

export default Pagination;
