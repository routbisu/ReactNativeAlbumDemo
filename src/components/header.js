import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#4267B2',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.3,
        elevation: 2,     
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: '#FFF'
    }
};

export default Header;
