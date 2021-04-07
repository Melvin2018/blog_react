import actions from './actions/index'
let blogs = []
export default (state = blogs, action) => {
    switch (action.type) {
        case "GET":
            return state;
        case "SUBMIT":
            return actions.blog.add
        default:
            return state;
    }
};