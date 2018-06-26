import React from "react";
import { connect } from "react-redux";

import BuildingResearchListView from "../Views/BuildingResearchListView";
import { researchBuilding } from "../../Redux/actions/buildings-actions";

const mapStateToProps = function(state, ownProps) {
  return {
    buildings: state.buildings,
    ressources: state.ressources
  };
};

const render = props => {
  return (
    <BuildingResearchListView
      buildings={props.buildings}
      research={props.research}
      researchBuildingId={props.researchBuildingId}
    />
  );
};

export default connect(mapStateToProps, {})(render);
