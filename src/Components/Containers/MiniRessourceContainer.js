import React from "react";
import { connect } from "react-redux";
import MiniRessourceView from "../Views/MiniRessourceView";

const mapStateToProps = function(state, ownProps) {
  return {
    ressource: state.ressources[ownProps.id]
  };
};

const render = props => {
  return (
    <MiniRessourceView
      ressource={props.ressource}
      quantity={props.quantity}
      id={props.id}
    />
  );
};

export default connect(mapStateToProps, {})(render);
