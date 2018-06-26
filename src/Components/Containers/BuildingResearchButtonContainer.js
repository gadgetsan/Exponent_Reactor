import React from "react";
import { connect } from "react-redux";

import BuildingResearchButtonView from "../Views/BuildingResearchButtonView";
import { researchBuilding } from "../../Redux/actions/buildings-actions";

const mapStateToProps = function(state, ownProps) {
  return {
    buildings: state.buildings,
    ressources: state.ressources
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    research: () => {
      dispatch(researchBuilding(ownProps.researchBuildingId, ownProps.id));
    }
  };
};

const render = props => {
  return (
    <BuildingResearchButtonView
      building={props.buildings[props.id]}
      ressources={props.ressources}
      research={props.research}
      researchBuilding={props.buildings[props.researchBuildingId]}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(render);
