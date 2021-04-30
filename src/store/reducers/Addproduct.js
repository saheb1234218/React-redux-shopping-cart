const initialstate={
    products:[],
}

const Addproducts=(state=initialstate,action)=>{
    switch(action.type){
        case 'ADD_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            }
        default:
            return state;
    }

}
export default Addproducts;