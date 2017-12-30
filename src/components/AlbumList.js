import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AlbumDetail from './AlbumDetail';

import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({
                albums: response.data
            }));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.detail} album={album} />
        );
    }

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;
