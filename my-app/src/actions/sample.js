export const completeTodoList = list => {
    return {
      type: "COMPLETE-TODO-LIST",
      completeTodoList: list,
    };
  };
  export const removeTodoList = list => {
    console.log(list, "remove action");
    return {
      type: "REMOVE-TODO-LIST",
      removeTodoList: list,
    };
  };