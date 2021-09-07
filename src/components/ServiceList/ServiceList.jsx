import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeService, editService, removeFilteredService} from '../../actions/actionCreators';

export function ServiceList(props) {

    const setEdit = props.setEdit;
    const filter = useSelector((state) => state.serviceFilter)
    const items = useSelector((state) => state.serviceList);
    const viewItems = (filter.status === 'active') ? filter.filteredServices : items;
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeService(id));
        if (filter.status === 'active') dispatch(removeFilteredService(id));
    }

    const handleEdit = (id, serviceName, price) => {
        setEdit({edit: true, serviceId: id});
        dispatch(editService(serviceName, price));
    }

    return (
        <ul className={'ServiceList'}>
            {viewItems.map((item) =>
                <li key={item.id} className={'ServiceItem'}>
                    <div className={'ServiceWrapperValue'}>
                        <span className={'ServiceValue'}>{item.name}</span>
                        <span className={'ServiceValue'}>{item.price} ₽</span>
                    </div>
                    <div className={'ServiceListWrapperButtons'}>
                        <button className={'ServiceButton'} onClick={() => handleEdit(item.id, item.name, item.price)}>✎</button>
                        <button className={'ServiceButton'} onClick={() => handleRemove(item.id)}>✕</button>
                    </div>
                </li>)}
        </ul>
    )
}
