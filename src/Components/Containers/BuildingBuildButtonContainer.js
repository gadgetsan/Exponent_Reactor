import React from "react";
import { connect } from "react-redux";

import BuildingBuildButtonView from "../Views/BuildingBuildButtonView";
import { buildBuilding } from "../../Redux/actions/buildings-actions";

const mapStateToProps = function(state, ownProps) {
  return {
    buildings: state.buildings,
    ressources: state.ressources
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    build: () => {
      dispatch(buildBuilding(ownProps.id));
    }
  };
};

const render = props => {
  return (
    <BuildingBuildButtonView
      building={props.buildings[props.id]}
      ressources={props.ressources}
      build={props.build}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(render);
