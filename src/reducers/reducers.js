import {combineReducers} from 'redux'
import { ADD_TODO } from '../actions/actions'

//criar funcção para a criação dos itens da lista

function todo(state, action){
    switch(action.type){
        case ADD_TODO:
            return{
                id: action.id,
                text: action.text,
            }
            default:
                return state
    }
}

function todos(state = [], action){
    switch(action.type){
        case ADD_TODO:
            return[
                //cria uma cópia da atualização do state
                ...state,
                todo(undefined, action)
            ]
            default:
                return state
    }
}

//criando uma constante que rece a junção das funções
//a partir do combineReducers
const todoApp = combineReducers({todos})

export default todoApp