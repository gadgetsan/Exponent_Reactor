import React from "react";
import MiniRessourceContainer from "../Containers/MiniRessourceContainer";
import RessourceProvenanceContainer from "../Containers/RessourceProvenanceContainer";
import SIDisplay from "../../Components/UI/SIDisplay";

export default class RessourceModalView extends React.Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".ressourcesModal");
    var instances = M.Modal.init(elems, { preventScrolling: false });
  }

  render() {
    return [
      <a
        className="waves-effect waves-light btn-small modal-trigger"
        href={"#ressourceModal" + this.props.id}
        key="0"
      >
        INFO
      </a>,
      <div
        id={"ressourceModal" + this.props.id}
        className="modal ressourcesModal"
        key="1"
      >
        <div className="modal-content">
          <h4>{this.props.ressource.name}</h4>
          <div className="row">
            <div className="col s8">
              <p>
                <b>Quantity: </b>
                <MiniRessourceContainer
                  id={this.props.id}
                  quantity={this.props.ressource.quantity}
                />
                <small>
                  {" "}
                  /{" "}
                  <SIDisplay
                    value={this.props.ressource.quota}
                    unit={this.props.ressource.unit}
                  />
                </small>
              </p>
            </div>
            <div className="col s4">
              <p />
            </div>
            <div className="col s8">
              <RessourceProvenanceContainer
                id={this.props.id}
                ressource={this.props.ressource}
              />
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
