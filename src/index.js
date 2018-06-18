/*DEPENDENCIES*/
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

/*STORE*/
import Store from "./Redux/store.js";

/*COMPONENTS*/
import BuildingListContainer from "./Components/Containers/BuildingListContainer";
import PopulationListContainer from "./Components/Containers/PopulationListContainer";
import MetaControlContainer from "./Components/Containers/MetaControlContainer";
import RessourceListContainer from "./Components/Containers/RessourceListContainer";
import ContentSection from "./Components/UI/ContentSection";
import ContentSubSection from "./Components/UI/ContentSubSection";
import SubSectionHeader from "./Components/UI/SubSectionHeader";
import SubSectionBody from "./Components/UI/SubSectionBody";
import TableElement from "./Components/UI/TableElement";
import TabElement from "./Components/UI/TabElement";

/*Intelligence / Backend*/
import BuildingsBackend from "./Components/Backend/Buildings-Backend";

const styles = {
  textAlign: "center"
};

function App(props) {
  return (
    <Provider store={Store}>
      <div style={styles}>
        <BuildingsBackend />
        <ContentSection>
          <MetaControlContainer />
          <ContentSubSection size="8">
            <SubSectionHeader name="Buildings" />
            <SubSectionBody>
              <TabElement
                tabs={[
                  {
                    name: "Current",
                    component: (
                      <BuildingListContainer filter={b => b.count > 0} />
                    )
                  },
                  {
                    name: "Unused",
                    component: (
                      <BuildingListContainer filter={b => b.count < 1} />
                    )
                  }
                ]}
              />
            </SubSectionBody>
          </ContentSubSection>
          <ContentSubSection size="4">
            <SubSectionHeader name="Ressources" />
            <SubSectionBody>
              <TableElement>
                <RessourceListContainer />
              </TableElement>
            </SubSectionBody>
          </ContentSubSection>
          <ContentSubSection size="2">
            <SubSectionHeader name="Population" />
            <SubSectionBody>
              <TableElement>
                <PopulationListContainer />
              </TableElement>
            </SubSectionBody>
          </ContentSubSection>
        </ContentSection>
      </div>
    </Provider>
  );
}
render(<App />, document.getElementById("root"));
