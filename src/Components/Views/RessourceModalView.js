import React from "react";
import MiniRessourceContainer from "../Containers/MiniRessourceContainer";
import RessourceProvenanceContainer from "../Containers/RessourceProvenanceContainer";

export default class RessourceModalView extends React.Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
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
      <div id={"ressourceModal" + this.props.id} className="modal" key="1">
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
              </p>
            </div>
            <div className="col s4">
              <p />
            </div>
            <div className="col s8">
              <RessourceProvenanceContainer id={this.props.id} />
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
