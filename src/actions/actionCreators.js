import {
    ADD_SERVICE,
    REMOVE_SERVICE,
    CHANGE_SERVICE_FIELD,
    CLEAR_SERVICE_FIELD,
    EDIT_SERVICE,
    EDIT_AND_SAVE_SERVICE,
    FILTER_SERVICE, REMOVE_FILTERED_SERVICE
} from './actionTypes';

export function addService(name, price) {
    return {
        type: ADD_SERVICE, payload: {name, price}
    };
}

export function clearServiceField() {
    return {
        type: CLEAR_SERVICE_FIELD
    }
}

export function removeService(id) {
    return {
        type: REMOVE_SERVICE, payload: {id}
    };
}

export function changeServiceField(name, value) {
    return {
        type: CHANGE_SERVICE_FIELD, payload: {name, value}
    };
}

export function editService(serviceName, price) {
    return {
        type: EDIT_SERVICE, payload: {serviceName, price}
    };
}

export function editAndSaveService(serviceId, serviceName, servicePrice) {
    return {
        type: EDIT_AND_SAVE_SERVICE, payload: {serviceId, serviceName, servicePrice}
    };
}

export function serviceFilter(status, filteredServices) {
    return {
        type: FILTER_SERVICE, payload: {status, filteredServices}
    }
}

export function removeFilteredService(id) {
    return {
        type: REMOVE_FILTERED_SERVICE, payload: id
    }
}
