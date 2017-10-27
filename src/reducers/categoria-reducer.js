import { CATEGORIA_LIST, CATEGORIA_ADD } from '../actions/categoria-action'

const initialState = {
    list: []
}

const categoriaReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIA_LIST:
            return {
                ...state,
                list: action.list
            }
            break;
        case CATEGORIA_ADD:
            return {
                ...state,
            }
            break;
        default:
            return state;
    }
}
export default categoriaReducer