import React, {useState} from 'react';
import {ServiceAdd} from './ServiceAdd/ServiceAdd';
import {ServiceList} from './ServiceList/ServiceList';
import {ServiceFilter} from './ServiceFilter/ServiceFilter';

export function ServiceApp() {
    const [state, setEdit] = useState({edit: false, serviceId: null});

    return(
        <div className={'ServiceApp'}>
            <ServiceFilter/>
            <ServiceAdd editState={state} setEdit={setEdit}/>
            <ServiceList setEdit={setEdit}/>
        </div>
    )
}
