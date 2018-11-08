//Libraries
import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
//Files
import AlbumDetail from './AlbumDetail';


class AlbumList extends React.Component {
  state = {
    albums: [],
    albums2: []
  };

  async getData(){
    const res = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
      return await res;
  }

  componentWillMount(){
    // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    this.getData()
      .then(response => this.setState({ albums: response.data }));
    this.getData()
      .then(response => this.setState({ albums2: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map( album =>
      <AlbumDetail key={album.title} album={album}/>
    );
  }

  renderAlbums2() {
    return this.state.albums2.map( album =>
      <AlbumDetail key={album.title} album={album}/>
    );
  }

  render(){
    return (
      <ScrollView>
        { this.renderAlbums() }
        { this.renderAlbums2() }
      </ScrollView>
    );
  }
}

export default AlbumList;
