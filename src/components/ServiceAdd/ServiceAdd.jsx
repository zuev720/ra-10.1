import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addService, changeServiceField, clearServiceField, editAndSaveService} from '../../actions/actionCreators';

export function ServiceAdd(props) {
    const edit = props.editState.edit;
    const item = useSelector((state) => state.serviceAdd);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        (edit) ? dispatch(editAndSaveService(props.editState.serviceId, item.name, item.price))
                    && props.setEdit({edit: false, serviceId: null})
               : dispatch(addService(item.name, item.price));
        dispatch(clearServiceField());
        e.preventDefault();
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        dispatch(changeServiceField(name, value));
    }

    const handleEditServiceButton = () => {
        props.setEdit({edit: false, serviceId: null});
        dispatch(clearServiceField());
    }

    return (
        <form className={'ServiceAdd'} onSubmit={handleSubmit}>
            <input className={'ServiceAddInput'} name={'name'} onChange={handleChange} value={item.name}/>
            <input className={'ServiceAddInput'} name={'price'} onChange={handleChange} value={item.price}/>
            <button className={'ServiceAddButton'} type={'submit'}>Save</button>
            {edit && <button className={'ServiceAddButton'} type={'button'} onClick={handleEditServiceButton}>Cancel</button>}
        </form>
    )
}
