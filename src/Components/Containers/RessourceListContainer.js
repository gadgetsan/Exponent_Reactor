import React from "react";
import { connect } from "react-redux";
import RessourceListView from "../Views/RessourceListView";

const mapStateToProps = function(state, ownProps) {
  return {
    ressources: state.ressources
  };
};

const render = props => {
  return <RessourceListView ressources={props.ressources} />;
};

export default connect(mapStateToProps, {})(render);
