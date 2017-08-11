// Index.anroid.js - place code for anroid in this file

// Import external modules
import React from 'react'
import { Text, AppRegistry } from 'react-native'

// Create App Component
const App = () => {
    // This is JSX: 
    // * Syntax like html
    // * Renders to Javascript
    // * babeljs.io
    return (
        <Text>SomeText</Text>
    );
};

// Render to Device
// * Here we are registering the main/parent component
// * Only register one main component
AppRegistry.registerComponent('albums', () => App);
