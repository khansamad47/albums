import React from 'react';
import { View } from 'react-native';

// This component is only used for styling

const Card = (props) => {
    // This will stick all components used inside
    // Card component
    return (
        <View style={ styles.containerStyle }>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle : {
        borderWidth: 1,
        borderRadius: 2, // style: Rounded corners
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.1,
        shadowRadius : 2, // style: Rounded shadow
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }
};

export default Card;
