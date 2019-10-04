import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "93QAXoBCMmCU8"
    };

    this.search("homer thinking");
  }

  search = (query) => {
    giphy('n3vYbt84gNPxKNQo9N8RygeOwWYsKGUz').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }


  render() {
    const gifs = [
      { id: "93QAXoBCMmCU8" },
      { id: "xT9IgDEI1iZyb2wqo8" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
