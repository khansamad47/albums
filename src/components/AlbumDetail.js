import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';

import Card from './Card';
import Button from './Button';
import CardSection from './CardSection';

// destruvture props for effcialncy
//const AlbumDetail = (props) => {
const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image, image, url} = album;
    return(
        <Card>
            <CardSection>
                <View style = {styles.thumbnailContainerStyle} >
                    <Image 
                        style = {styles.thumbnailStyle}
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style = {styles.headerTextStyle}>
                    { title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image 
                    style = {styles.imageStyle}
                    source={{uri: image}}
                />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)} />
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
    headerTextStyle:{
        fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        width: 300,
        flex: 1,
        width: null, // This means it will take whole width
    },
}

export default AlbumDetail;
