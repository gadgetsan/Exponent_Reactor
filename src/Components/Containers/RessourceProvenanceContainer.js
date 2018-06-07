import React from "react";
import { connect } from "react-redux";

import RessourceProvenanceView from "../Views/RessourceProvenanceView";

const mapStateToProps = function(state, ownProps) {
  return {
    buildings: state.buildings
  };
};

const render = props => {
  return <RessourceProvenanceView buildings={props.buildings} id={props.id} />;
};

export default connect(mapStateToProps, {})(render);
