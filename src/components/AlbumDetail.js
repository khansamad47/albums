import React, { Component } from 'react';
import { Text } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

//class AlbumDetail extends Component {
//    render () {
//        return(
//            <View>
//                <Text>{ this.props.title }</Text>
//            </View>
//        );
//    }
//}

// Since I dont need make much changes so 
// I only need a functional component
const AlbumDetail = (props) => {
    return(
        <Card>
            <CardSection>
                <Text>{ props.album.title }</Text>
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;
