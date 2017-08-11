// Index.anroid.js - place code for anroid in this file

// Import external modules
import React from 'react'
import { Text, AppRegistry } from 'react-native'

// Import local stuff
// * Need relative path and no .js is required
import Header from './src/components/header';

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
    return (<Header/>);
};

// Render to Device
// * Here we are registering the main/parent component
// * Only register the root component
AppRegistry.registerComponent('albums', () => App);
