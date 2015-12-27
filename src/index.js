import React from 'react-native';
import { Provider } from 'react-redux/native';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import calculatorReducer from './reducers/calculator';
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);
const store = createStoreWithMiddleware(calculatorReducer);

class Calculator extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                { () => <App /> }
            </Provider>
        );
    }
};

export default Calculator;
