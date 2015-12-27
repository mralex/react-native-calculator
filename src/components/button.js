import React from 'react-native';
let {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

class Button extends React.Component {
    render() {
        let style = this.props.style === 'dark' ? styles.buttonDark : styles.button;
        let touchUnderlay = this.props.style === 'dark' ? '#666' : '#aaa';

        return (
            <TouchableHighlight underlayColor={ touchUnderlay } style={styles.base} onPress={ this.props.onPress }>
                <View style={style}>
                    <Text style={styles.text}>{ this.props.value }</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    base: {
        flex: .25,
        borderRightWidth: 1,
        borderRightColor: '#fff',
    },

    button: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#eee',
    },

    buttonDark: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#aaa',
    },

    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});

export default Button;
