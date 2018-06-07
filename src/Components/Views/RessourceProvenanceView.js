import React from "react";

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
                        {building.quantities[self.props.id] * building.count}
                      </span>
                    ) : (
                      <span className="red-text">
                        {building.quantities[self.props.id] * building.count}
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
                  <b>{sum}</b>
                </span>
              ) : (
                <span className="red-text">
                  <b>{sum}</b>
                </span>
              )}
            </span>
          </div>
        </li>
      </ul>
    );
  }
}
