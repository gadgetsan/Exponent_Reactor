import React from "react";

export default props => {
  return (
    <tr>
      <td>
        <strong>Electrolyser</strong>
      </td>
      <td>1-0</td>
      <td>
        <span className="col-blue">
          <i className="material-icons">invert_colors</i> Water
        </span>
      </td>
      <td>
        <span className="col-cyan">
          <i className="material-icons">toll</i> Oxygen
        </span>
        <span className="col-orange">
          <i className="material-icons">toll</i> Hydrogen
        </span>
      </td>
    </tr>
  );
};
