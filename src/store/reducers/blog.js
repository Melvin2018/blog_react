const blogs = {
    list: [],
    blog: {}
}
const reducer = (state = blogs, action) => {
    switch (action.type) {
        case "GET":
            return state;
        default:
            return state;
    }
};
export default reducer