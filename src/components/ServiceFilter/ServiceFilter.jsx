import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {serviceFilter} from '../../actions/actionCreators';

export function ServiceFilter() {
    const services = useSelector((state) => state.serviceList);
    const [actualServices, setActualServices] = useState(services);
    const dispatch = useDispatch();

    useEffect(() => setActualServices(services), [services]);

    const handleServiceFilterChange = (e) => {
        const inputValue = e.target.value;
        const filteredServices = actualServices.filter((service) => service.name.toLowerCase().includes(inputValue.toLowerCase()));
        dispatch(serviceFilter('active', filteredServices));
        if (inputValue === '') dispatch(serviceFilter('inActive', []));
    }

    return (
        <div className={'ServiceFilter'}>
            <label htmlFor={'serviceFilter'}>
                <input id={'serviceFilter'} onChange={handleServiceFilterChange} className={'ServiceFilterInput'} type={'text'} placeholder={'Найти задачу'}/>
            </label>
        </div>
    )
}
