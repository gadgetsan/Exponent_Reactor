import React from "react";
import { connect } from "react-redux";
import BuildingListView from "../Views/BuildingListView";

const mapStateToProps = function(state) {
  return {
    buildings: state.buildings
  };
};

const render = props => {
  return <BuildingListView buildings={props.buildings} />;
};

export default connect(mapStateToProps, {})(render);
