import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Loader from 'react-loader-spinner';

class Navigation extends Component {
  render() {
    return (
      <>
        <nav>
          <div className="logo-loader">
            <h1 className="logo">Friends</h1>
            {this.props.isLoading && (
              <Loader type="TailSpin" color="grey" height="20" />
            )}
          </div>
          <div className="right-nav">
            <NavLink to="/">View Friends</NavLink>
            <NavLink to="/add-friend">Add Friend</NavLink>
          </div>
        </nav>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  {}
)(Navigation);
