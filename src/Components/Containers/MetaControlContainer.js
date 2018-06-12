import React from "react";
import { connect } from "react-redux";

import MetaControlView from "../Views/MetaControlView";
import {
  saveGame,
  loadGame,
  clearGame
} from "../../Redux/actions/meta-actions";

const mapStateToProps = function(state, ownProps) {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveGame: () => {
      dispatch(saveGame());
    },
    loadGame: () => {
      dispatch(loadGame());
    },
    clearGame: () => {
      dispatch(clearGame());
    }
  };
};

const render = props => {
  return (
    <MetaControlView
      save={props.saveGame}
      load={props.loadGame}
      clear={props.clearGame}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(render);
