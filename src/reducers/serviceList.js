import {nanoid} from 'nanoid';
import {ADD_SERVICE, EDIT_AND_SAVE_SERVICE, REMOVE_SERVICE} from '../actions/actionTypes'

const initialState = [
    {id: nanoid(), name: 'Замена стекла', price: 21000},
    {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export function serviceListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SERVICE:
            const {name, price} = action.payload;
            return [...state, {id: nanoid(), name, price: Number(price)}];
        case EDIT_AND_SAVE_SERVICE:
            const {serviceId, serviceName, servicePrice} = action.payload;
            const editService = state.find((service) => service.id === serviceId);
            editService.name = serviceName;
            editService.price = Number(servicePrice);
            return state.map((service) => (service.id === serviceId) ? editService : service);
        case REMOVE_SERVICE:
            const {id} = action.payload;
            return state.filter(service => service.id !== id);
        default:
            return state;
    }
}
