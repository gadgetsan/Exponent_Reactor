/*DEPENDENCIES*/
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

/*STORE*/
import Store from "./Redux/store.js";

/*COMPONENTS*/
import BuildingListContainer from "./Components/Containers/BuildingListContainer";
import MetaControlContainer from "./Components/Containers/MetaControlContainer";
import RessourceListContainer from "./Components/Containers/RessourceListContainer";
import ContentSection from "./Components/UI/ContentSection";
import ContentSubSection from "./Components/UI/ContentSubSection";
import ListSubSection from "./Components/UI/ListSubSection";

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
            <ListSubSection name="Buildings">
              <BuildingListContainer />
            </ListSubSection>
          </ContentSubSection>
          <ContentSubSection size="4">
            <ListSubSection name="Ressources">
              <RessourceListContainer />
            </ListSubSection>
          </ContentSubSection>
        </ContentSection>
      </div>
    </Provider>
  );
}
render(<App />, document.getElementById("root"));
