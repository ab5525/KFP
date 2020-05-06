import {ActionTypes} from '../types';


const INTITIAL_STATE = {
    selected: null,
}


export const donateReducer = (state=INTITIAL_STATE, action) => {
    switch(action.type){
        case ActionTypes.SELECT:
            return{
                ...state,
                selected: action.payload
            }
        default:
            return state;


    }
}

export default donateReducer;