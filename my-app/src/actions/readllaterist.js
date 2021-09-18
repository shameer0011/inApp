import {
  GET_READ_LIST,
  SAVE_READ_LATER_ITEM,
  REMOVE_READ_LATER_ITEM,
} from "../reducers/readillaterist";

export const getReadLaterList = list => {
  return {
    type: GET_READ_LIST,
  };
};

export const saveReadLaterItem = article => {
  return {
    type: SAVE_READ_LATER_ITEM,
    payload: article,
  };
};
export const removeReadLaterItem = article => {
  return {
    type: REMOVE_READ_LATER_ITEM,
    payload: article,
  };
};
