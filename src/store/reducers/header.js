import { header as types } from '../../constants/types'
const header = {
    name: ''
}
const reducer = (state = header, action) => {
    switch (action.type) {
        case types.get:
            return state;
        case types.change:
            return { ...state, name: action.payload.name }
        default:
            return state;
    }
};
export default reducer