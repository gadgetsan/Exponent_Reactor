import React from "react";
import BuildingListItemView from "./BuildingListItemView";
import TableElement from "../UI/TableElement";
import BuildingResearchButtonContainer from "../Containers/BuildingResearchButtonContainer";

export default function BuildingResearchListView(props) {
  return props.buildings.filter(b => !b.research.researched).map(building => {
    return [
      <BuildingResearchButtonContainer
        key={building.id}
        id={building.id}
        researchBuildingId={props.researchBuildingId}
      />,
      <br />
    ];
  });
}
