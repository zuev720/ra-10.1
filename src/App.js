import './App.css';
import {store} from './store';
import {Provider} from 'react-redux';
import {ServiceApp} from './components/ServiceApp';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <ServiceApp />
            </div>
        </Provider>
    );
}

export default App;
