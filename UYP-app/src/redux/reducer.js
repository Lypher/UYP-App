import { GET_COUNT,GET_USER } from "./actions";

const initialState = {
    Counts:[],
    Users:[],
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_USER:
            return{
                ...state,
                Affiliates:action.payload,
            };
        case GET_COUNT:
            return{
                ...state,
                Users:action.payload,
            };
        default:
            return{
                ...state,
            };
    }
}

export default reducer;