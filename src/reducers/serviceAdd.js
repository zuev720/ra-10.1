import {CHANGE_SERVICE_FIELD, CLEAR_SERVICE_FIELD, EDIT_SERVICE} from '../actions/actionTypes'

const initialState = {name: '', price: ''};

export function serviceAddReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case CLEAR_SERVICE_FIELD:
            return {...state, ...initialState};
        case EDIT_SERVICE:
            const {serviceName, price} = action.payload;
            return {...state, name: serviceName, price: price};
        default:
            return state;
    }
}
