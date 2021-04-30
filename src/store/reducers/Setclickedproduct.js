const initialstate={
    product:[],
}

const Setclickedproducts=(state=initialstate,action)=>{
    switch(action.type){
        case 'SET_CLICKEDPRODUCT':
            return {
                ...state,
                product: action.payload,
            }
        default:
            return state;
    }

}
export default Setclickedproducts;