import React from "react";

import BuildingStatus from "../../Components/UI/BuildingStatus";
import BuildingBuildButtonContainer from "../../Components/Containers/BuildingBuildButtonContainer";
import MiniRessourceContainer from "../Containers/MiniRessourceContainer";

export default class BuildingModalView extends React.Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  }

  render() {
    var self = this;
    return [
      <a
        className="waves-effect waves-light btn-small modal-trigger"
        href={"#buildingModal" + this.props.id}
        key="0"
      >
        INFO
      </a>,
      <div id={"buildingModal" + this.props.id} className="modal" key="1">
        <div className="modal-content">
          <h4>{this.props.building.name}</h4>
          <div className="row">
            <div className="col s6">
              <p>
                <b>Quantity: </b>
                {this.props.building.count}
                <br />
                <b>Efficiency: </b>
                <BuildingStatus building={this.props.building} />
                <br />
                <br />
                <BuildingBuildButtonContainer id={this.props.id} />
              </p>
            </div>
            <div className="col s6">
              <div>Input: </div>
              <div>
                {Object.keys(self.props.building.quantities)
                  .filter(oneKey => {
                    return self.props.building.quantities[oneKey] < 0;
                  })
                  .map(function(key) {
                    return (
                      <MiniRessourceContainer
                        key={key}
                        id={key}
                        quantity={-self.props.building.quantities[key]}
                      />
                    );
                  })
                  .reduce((accu, elem) => {
                    if (accu === null) {
                      return [elem];
                    }
                    return [accu, elem];
                  }, null)}
              </div>
              <div>Output: </div>
              <div>
                {Object.keys(self.props.building.quantities)
                  .filter(oneKey => {
                    return self.props.building.quantities[oneKey] > 0;
                  })
                  .map(function(key) {
                    return (
                      <MiniRessourceContainer
                        key={key}
                        id={key}
                        quantity={self.props.building.quantities[key]}
                      />
                    );
                  })
                  .reduce((accu, elem) => {
                    if (accu === null) {
                      return [elem];
                    }
                    return [accu, elem];
                  }, null)}
              </div>
            </div>
            <div className="col s6">
              <p>{JSON.stringify(this.props)}</p>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Close
          </a>
        </div>
      </div>
    ];
  }
}
