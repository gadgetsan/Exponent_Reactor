import React from "react";
import { connect } from "react-redux";
import PopulationListView from "../Views/PopulationListView";

const mapStateToProps = function(state, ownProps) {
  return {
    population: state.population
  };
};

const render = props => {
  return <PopulationListView population={props.population} />;
};

export default connect(mapStateToProps, {})(render);
