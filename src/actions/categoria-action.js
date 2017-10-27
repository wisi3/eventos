import axios from 'axios'
const client = axios.create({
    baseURL: "https://eventos-serve.herokuapp.com"
})
const url= "/api-catalogo/categorias/"
export const CATEGORIA_LIST="CATEGORIA_LIST"
export const categoriaList = (list) => (
    {
        type: CATEGORIA_LIST,
        list
    }
)

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(categoriaList(r.data))
        }).catch(error => { //throw (error)
        })
    }
}
