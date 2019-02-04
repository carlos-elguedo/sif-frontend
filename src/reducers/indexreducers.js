import {ADD_ARTICLE} from "../utils/actions-type"

const initialState = {
    articles: []
}

const rootReducers = (state = initialState, action) => {
    switch(action.type){

        case ADD_ARTICLE:
            //state.articles.push(action.payload)
            //return {...state, articles: state.articles.concat(action.payload)}
            return {...state, articles: [...state.articles, action.payload]}

        default:
            return state
    }

}



export default rootReducers