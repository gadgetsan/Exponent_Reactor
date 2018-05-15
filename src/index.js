/*DEPENDENCIES*/
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
/*STORE*/
import Store from "./Redux/store.js";
/*COMPONENTS*/
import BuildingListContainer from "./Components/Containers/BuildingListContainer";
import ContentSection from "./Components/UI/ContentSection";
import ContentSubSection from "./Components/UI/ContentSubSection";
import ListSubSection from "./Components/UI/ListSubSection";

const styles = {
  textAlign: "center"
};

function App(props) {
  return (
    <Provider store={Store}>
      <div style={styles}>
        <h4>Start typing to see some magic happen {"\u2728"}</h4>
        <ContentSection>
          <ContentSubSection>
            <ListSubSection name="Buildings">
              <BuildingListContainer />
            </ListSubSection>
          </ContentSubSection>
        </ContentSection>
      </div>
    </Provider>
  );
}

render(<App />, document.getElementById("root"));
