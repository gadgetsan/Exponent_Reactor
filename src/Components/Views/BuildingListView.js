import React from "react";
import BuildingListItemView from "./BuildingListItemView";

export default props => {
  return (
    <section className="content">
      <div className="container-fluid">
        <div className="block-header">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="card">
              <div className="header">
                <h2>Buildings</h2>
              </div>
              <div className="body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Input</th>
                        <th>Output</th>
                      </tr>
                    </thead>
                    <tbody>
                      <BuildingListItemView />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
