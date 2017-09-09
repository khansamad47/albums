// Index.anroid.js - place code for anroid in this file

// Import external modules
import React from 'react'
import { View, Text, AppRegistry } from 'react-native'

// Import local stuff
// * Need relative path and no .js is required
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create App Component
// This is the ROOT component
const App = () => {
    // This is JSX: 
    // * Syntax like html
    // * Renders to Javascript
    // * babeljs.io
    //return (
    //    <Text>SomeText</Text>
    //);

    // Note that custom components are also invoked by JSX
    // flex :1 will allow to take some with of the screen
    return (
        <View style={{ flex: 1 }}>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
};

// Render to Device
// * Here we are registering the main/parent component
// * Only register the root component
AppRegistry.registerComponent('albums', () => App);
