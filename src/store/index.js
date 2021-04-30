
import allReducers from './reducers';
import {createStore} from 'redux';

const storehouse=createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


    export default storehouse;