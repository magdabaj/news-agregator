/**
 *
 * SearchUserPage
 *
 */

import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

class SearchUser extends React.Component {
  state = {
    // The active selection's index
    activeSuggestion: 0,
    // The suggestions that match the user's input
    filteredSuggestions: [],
    // Whether or not the suggestion list is shown
    showSuggestions: false,
    // What the user has entered
    tag: { text: '' },
  };

  handleInputChange = event => {
    const { users } = this.props;
    const { value, name } = event.target;
    this.setState({ tag: { [name]: value } });
    this.setState({
      filteredSuggestions: users.filter(user =>
        user.name.toLowerCase().includes(this.state.tag.text.toLowerCase()),
      ),
    });

    this.setState({
      activeSuggestion: 0,
      showSuggestions: true,
    });
  };

  onClick = e => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      tag: { text: e.currentTarget.innerText },
    });
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;
    // user presses the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestions: 0,
        showSuggestions: false,
        tag: { text: filteredSuggestions[activeSuggestion] },
      });
    }
    // user pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // user pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    return (
      <div className="input-tag">
        <Fragment>
          <form>
            <input
              type="text"
              onChange={this.handleInputChange}
              onKeyDown={this.onKeyDown}
              name="text"
              value={this.state.tag.text}
            />
          </form>

          {this.state.filteredSuggestions.length > 0 &&
          this.state.showSuggestions &&
          this.state.tag ?
            (this.state.filteredSuggestions.map((sug, i) => {
              let className;
              if (i === this.state.activeSuggestion) {
                className = 'suggestion-active';
              }
              return (
                <ul className="suggestions">
                  <li className={className} key={i} onClick={this.onClick}>
                    <Link to={`/users/${sug.email}`}> { sug.name } { sug.surname } </Link>
                  </li>
                </ul>
              )}
              )):null}
        </Fragment>
      </div>
    );
  }
}

SearchUser.propTypes = {
  users: PropTypes.array.isRequired,
};

export default memo(SearchUser);
