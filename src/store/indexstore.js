import {createStore} from "redux"
import rootReducers from "../reducers/indexreducers"

const store = createStore(rootReducers)

export default store