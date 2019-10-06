import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  handleUpdate = (event) => {
    this.setState({ term: event.target.value });
    const searchFunction = this.props;
    searchFunction(event.target.value);
  }


  render() {
    const { term } = this.state;
    return (
      <input
        value={term}
        type="text"
        className="form-control form-search"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
