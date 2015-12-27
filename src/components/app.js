import React from 'react-native';
import { connect } from 'react-redux/native';

import Button from './button';

import {
    addNumber,
    addOperator,
    clear,
    calculate
} from '../actions/calculate';

let {
  StyleSheet,
  Text,
  View,
} = React;

function mapStateToProps(state) {
    return {
        calculator: state
    };
}

// @connect(mapStateToProps)
class App extends React.Component {
    render() {
        let { dispatch } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.inputBar}>
                    <Text style={styles.value}>{ this.props.calculator.result }</Text>
                </View>
                <View style={styles.gridRow}>
                    <Button style="dark" value="MR" />
                    <Button style="dark" value="M-" />
                    <Button style="dark" value="M+" />
                    <Button style="dark" value="CA" onPress={ () => { dispatch(clear()) } }/>
                </View>
                <View style={styles.gridRow}>
                    <Button value="1" onPress={ () => { dispatch(addNumber(1)) } } />
                    <Button value="2" onPress={ () => { dispatch(addNumber(2)) } } />
                    <Button value="3" onPress={ () => { dispatch(addNumber(3)) } } />
                    <Button style="dark" value="/" onPress={ () => { dispatch(addOperator('DIV')) } } />
                </View>
                <View style={styles.gridRow}>
                    <Button value="4" onPress={ () => { dispatch(addNumber(4)) } } />
                    <Button value="5" onPress={ () => { dispatch(addNumber(5)) } } />
                    <Button value="6" onPress={ () => { dispatch(addNumber(6)) } } />
                    <Button style="dark" value="x" onPress={ () => { dispatch(addOperator('MUL')) } } />
                </View>
                <View style={styles.gridRow}>
                    <Button value="7" onPress={ () => { dispatch(addNumber(7)) } } />
                    <Button value="8" onPress={ () => { dispatch(addNumber(8)) } } />
                    <Button value="9" onPress={ () => { dispatch(addNumber(9)) } } />
                    <Button style="dark" value="-" onPress={ () => { dispatch(addOperator('SUB')) } } />
                </View>
                <View style={styles.gridRow}>
                    <Button value="0" onPress={ () => { dispatch(addNumber(0)) } } />
                    <Button value="." />
                    <Button style="dark" value="=" onPress={ () => { dispatch(calculate()) } } />
                    <Button style="dark" value="+" onPress={ () => { dispatch(addOperator('ADD')) } } />
                </View>
            </View>
        );
    }
};

let styles = StyleSheet.create({
    gridRow: {
        flexDirection: 'row',
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#fff',

        borderLeftWidth: 1,
        borderLeftColor: '#fff'
    },

    inputBar: {
        flexDirection: 'row',
        backgroundColor: '#efefef'
    },

    value: {
        textAlign: 'right',
        flex: 1,
        backgroundColor: '#ef3333',
        padding: 10,
        paddingTop: 20,
        fontSize: 32,
        color: '#fff'
    },

    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
});

export default connect(mapStateToProps)(App);
