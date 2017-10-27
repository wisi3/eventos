import {combineReducers} from 'redux'

import categoria from './categoria-reducer'

let reducer = combineReducers({
    categoria: categoria,
    
})