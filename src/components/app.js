import React from 'react-native';

import Button from './button';

let {
  StyleSheet,
  Text,
  View,
} = React;

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputBar}>
                    <Text style={styles.value}>12345678.9</Text>
                </View>
                <View style={styles.gridRow}>
                    <Button style="dark" value="MR" />
                    <Button style="dark" value="M-" />
                    <Button style="dark" value="M+" />
                    <Button style="dark" value="CA" />
                </View>
                <View style={styles.gridRow}>
                    <Button value="1" />
                    <Button value="2" />
                    <Button value="3" />
                    <Button style="dark" value="/" />
                </View>
                <View style={styles.gridRow}>
                    <Button value="4" />
                    <Button value="5" />
                    <Button value="6" />
                    <Button style="dark" value="x" />
                </View>
                <View style={styles.gridRow}>
                    <Button value="7" />
                    <Button value="8" />
                    <Button value="9" />
                    <Button style="dark" value="-" />
                </View>
                <View style={styles.gridRow}>
                    <Button value="0" />
                    <Button value="." />
                    <Button style="dark" value="=" />
                    <Button style="dark" value="+" />
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
        backgroundColor: '#ef0000',
        padding: 10,
        paddingTop: 20,
        fontSize: 32
    },

    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
});

export default App;
