// We dont want to get rid of React
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';
// Functional Component
//const AlbumList = () => {
//    return (
//        <View>
//        <Text>Album List</Text>
//        </View>
//    );
//};

// Classbased Components
// inhert from Component class

class AlbumList extends Component {

    // Component Level State
    // Here we are defining the initial empty state
    state = { albums: [] };

    // Must define this method always
    // render function must return
    // JSX
    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }

    // Helper method to convert album data to AlbumDetail Component
    renderAlbums() {
        //.map called on array
        return this.state.albums.map(
            album => <AlbumDetail key={album.title} album={album} /> );
    }

    // lifecycle This is a life cycle function
    // this will be called when component
    // loads
    componentWillMount() {
        console.log('AlbumList mounted');
        axios
        .get(
          'https://rallycoding.herokuapp.com/api/music_albums')
        //.then(response => console.log(response));
        // Here I am updating the state. This will call render once the this finishs
        .then(response => this.setState({ albums: response.data }));
        // We always modify state using using the state
        // setState
    }
}

export default AlbumList;
