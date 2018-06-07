import React from "react";
import { connect } from "react-redux";
import BuildingModalView from "../Views/BuildingModalView";
import { buildBuilding } from "../../Redux/actions/buildings-actions";

const mapStateToProps = function(state, ownProps) {
  return {
    buildings: state.buildings,
    id: ownProps.id
  };
};

const render = props => {
  return (
    <BuildingModalView
      building={props.buildings[props.id]}
      id={props.id}
      build={props.build}
    />
  );
};

export default connect(mapStateToProps, {})(render);
