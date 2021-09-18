const completeTodoListDefaultValue = [];
const completeTodoReducer = (state = completeTodoListDefaultValue, action) => {
    switch (action.type) {
        case "COMPLETE-TODO-LIST":
            console.log(action.completeTodoList);
            return [...state, action.completeTodoList];
            break;
        case "REMOVE-TODO-LIST":
            console.log(action.removeTodoList);
            return [...state.filter(c => c !== action.removeTodoList)];
            break;
        default:
            return state;
            break;
    }
};
export default completeTodoReducer;