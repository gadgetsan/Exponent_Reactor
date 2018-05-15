import React from "react";
import { connect } from "react-redux";
import MiniRessourceView from "../Views/MiniRessourceView";

const mapStateToProps = function(state, ownProps) {
  return {
    ressource: state.ressources.find(r => r.key === ownProps.id)
  };
};

const render = props => {
  return (
    <MiniRessourceView ressource={props.ressource} quantity={props.quantity} />
  );
};

export default connect(mapStateToProps, {})(render);
