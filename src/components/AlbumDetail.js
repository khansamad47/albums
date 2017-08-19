import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

// destruvture props for effcialncy
//const AlbumDetail = (props) => {
const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image} = album;
    return(
        <Card>
            <CardSection>
                <View>
                    <Image 
                        style = {styles.thumbnailStyle}
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column', 
        // flex this makes objects list as columns and 
        // applies all flex properties vertically
        justifyContent: 'space-around'
        // gives equal space around the items inside
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    }
}

export default AlbumDetail;
