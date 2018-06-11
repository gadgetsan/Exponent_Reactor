import React from "react";
import { connect } from "react-redux";

import MetaControlView from "../Views/MetaControlView";
import { saveGame, loadGame } from "../../Redux/actions/meta-actions";

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
    }
  };
};

const render = props => {
  return <MetaControlView save={props.saveGame} load={props.loadGame} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(render);
