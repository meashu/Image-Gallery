import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };

  onFormSubmit = (event) => {
    event.preventDefault(); //this will prevent from submitting the form automatically

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>
              Image Search <i className="images icon large"></i>
            </label>

            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>

          <button class="ui primary button" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
