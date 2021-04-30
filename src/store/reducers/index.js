import Addproducts from './Addproduct';
import Setproducts from './Setproducts';
import {combineReducers} from 'redux';
import Setclickedproducts from './Setclickedproduct';


const allReducers=combineReducers({
    Addproducts,
    Setproducts,
    Setclickedproducts,
}
)

export default allReducers;