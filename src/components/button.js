import React from 'react-native';
let {
  StyleSheet,
  Text,
  View,
} = React;

class Button extends React.Component {
    render() {
        let style = this.props.style === 'dark' ? styles.buttonDark : styles.button;

        return (
            <View style={style}>
                <Text style={styles.text}>{ this.props.value }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flex: .25,
        justifyContent: 'center',
        backgroundColor: '#eee',
        borderRightWidth: 1,
        borderRightColor: '#fff'
    },

    buttonDark: {
        flex: .25,
        justifyContent: 'center',
        backgroundColor: '#aaa',
        borderRightWidth: 1,
        borderRightColor: '#fff'
    },

    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default Button;
