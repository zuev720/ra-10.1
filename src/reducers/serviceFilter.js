import {FILTER_SERVICE, REMOVE_FILTERED_SERVICE} from '../actions/actionTypes';

const initialState = {
    status: 'inActive',
    filteredServices: [],
}

export function serviceFilterReducer(state = initialState, action) {
    switch (action.type) {
        case FILTER_SERVICE:
            state = action.payload;
            return state;
        case REMOVE_FILTERED_SERVICE:
            const id = action.payload;
            state.status = 'active';
            state.filteredServices = state.filteredServices.filter((service) => service.id !== id);
            return state;
        default:
            return state;
    }
}
