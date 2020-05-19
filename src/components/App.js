import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      //this is the Api I have created using unsplash developers
      params: { query: term }, //this wil be like /photos?query='term'
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <div className="Title">
          <h2 className="ui center  aligned icon header">
            <i className="circular  blue camera icon"></i>
            Gallery
          </h2>
        </div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
