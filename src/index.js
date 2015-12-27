import React from 'react-native';
import { Provider } from 'react-redux/native';

import App from './components/app';

class Calculator extends React.Component {
    render() {
        return (
            <Provider store={}>
                { () => <App /> }
            </Provider>
        );
    }
};

export default Calculator;
