import React from "react";

import SIDisplay from "../../Components/UI/SIDisplay";

export default class RessourceProvenanceView extends React.Component {
  render() {
    var self = this;
    var sum = 0;
    return (
      <ul className="collection with-header">
        {this.props.buildings.map(function(building, index) {
          //On va aller voir si ce building en produit
          if (
            building.quantities[self.props.id] !== undefined &&
            building.count > 0
          ) {
            sum += building.quantities[self.props.id] * building.count;
            return (
              <li className="collection-item">
                <div>
                  {building.name}
                  <span href="#!" className="secondary-content">
                    {building.quantities[self.props.id] > 0 ? (
                      <span className="green-text">
                        <SIDisplay
                          value={
                            building.quantities[self.props.id] * building.count
                          }
                          unit={self.props.ressource.unit}
                        />
                      </span>
                    ) : (
                      <span className="red-text">
                        -
                        <SIDisplay
                          value={
                            building.quantities[self.props.id] *
                            building.count *
                            -1
                          }
                          unit={self.props.ressource.unit}
                        />
                      </span>
                    )}
                  </span>
                </div>
              </li>
            );
          }
        })}
        <li className="collection-item">
          <div>
            <b>TOTAL</b>
            <span href="#!" className="secondary-content">
              {sum > 0 ? (
                <span className="green-text">
                  <SIDisplay value={sum} unit={self.props.ressource.unit} />
                </span>
              ) : (
                <span className="red-text">
                  -
                  <SIDisplay value={-sum} unit={self.props.ressource.unit} />
                </span>
              )}
            </span>
          </div>
        </li>
      </ul>
    );
  }
}
