import {createStore, applyMiddleware, compose} from 'redux'
import {rootReducer} from "./RootReducer";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()) || compose

))
