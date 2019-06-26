import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getPhoto } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getPhoto()
  }

  render() {
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
      return <div>Something cool is about to happen...</div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    isLoading: state.charsReducer.isLoading
  }
}

export default connect(
  mapStateToProps/* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getPhoto
  }
)(CharacterListView);
