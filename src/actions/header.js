import list from '../routes/routes'
import { header } from '../constants/types'

export const change = (name) => (dispatch, getState) => {
    let title = name;
    if (!name) {
        const paths = getState().router.location.pathname.split("/");
        const find = list.find(x => x.title.toLowerCase() === paths[1].toLowerCase());
        title = find === undefined ? "Blog" : find.title;
    }
    dispatch({
        type: header.change,
        payload: {
            name: title
        }
    })
}
const actions = { change }
export default actions