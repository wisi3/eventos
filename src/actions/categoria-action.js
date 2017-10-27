export const CATEGORIA_LIST="CATEGORIA_LIST"

export const categoriaList = (list) => (
    {
        type: CATEGORIA_LIST,
        list
    }
)

/*

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(categoriaListSuccess(r.data))
        }).catch(error => { //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(categoriaListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(categoriaListFailure(JSON.stringify('Error '+error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(categoriaListFailure('Error '+error.message))
            }
            //console.log(error.config);
        })
    }
}
*/