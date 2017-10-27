import { CATEGORIA_LIST } from '../actions/categoria-action'

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

        default:
            return state;
    }
}
export default categoriaReducer