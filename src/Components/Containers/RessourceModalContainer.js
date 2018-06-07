import React from "react";
import { connect } from "react-redux";

import RessourceModalView from "../Views/RessourceModalView";

const mapStateToProps = function(state, ownProps) {
  return {
    ressources: state.ressources,
    id: ownProps.id
  };
};

const render = props => {
  return (
    <RessourceModalView ressource={props.ressources[props.id]} id={props.id} />
  );
};

export default connect(mapStateToProps, {})(render);
