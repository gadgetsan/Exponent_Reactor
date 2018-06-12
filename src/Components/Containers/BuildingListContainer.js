import React from "react";
import { connect } from "react-redux";
import BuildingListView from "../Views/BuildingListView";

const mapStateToProps = function(state, ownProps) {
  return {
    buildings: state.buildings.filter(ownProps.filter)
  };
};

const render = props => {
  return <BuildingListView buildings={props.buildings} />;
};

export default connect(mapStateToProps, {})(render);
