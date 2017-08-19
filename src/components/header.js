// header.js 
// Header Component will be defined here
// Note that each file can have only one component
// This is a child component

import React from 'react';
import {Text, View} from 'react-native';

// 1. Basic Component
// Remember that component is a function which returns JSX
// const Header = () => {
//     const { textStyle } = styles;
//     return <Text style={textStyle}>Albums</Text>;
// };

// 2. Component with a View
// * View is used to contain components
// * Position child on the screen using flexbox
// * Flexbox is css based position technology
// * It is used to position elements in a container 
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{ props.headerText }</Text>
        </View>
    );
};

// Styling
// this is created as a dictionary
// each sub component should have a sub dict
const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center', // Flexbox vertical: 'flex-start', 'flex-end'
        alignItems: 'center',     // Flexbox horizon: 'flex-start', 'flex-end'
        height : 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,         // We dont know what these do yet
        position: 'relative'  // We don't know what these do yet
    }
};

// Need to export component always
// Note that we only register the root component
export default Header;

