const usuario = {
    list: [],
    usuario: {}
}
const reducer = (state = usuario, action) => {
    switch (action.type) {
        case "GET":
            return state;
        default:
            return state;
    }
};
export default reducer