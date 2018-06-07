import React from "react";
import { connect } from "react-redux";
import { buildingTick } from "../../Redux/actions/buildings-actions";

const mapStateToProps = function(state) {
  return {
    buildings: state.buildings
  };
};

const mapDispatchToProps = dispatch => {
  return {
    tick: () => {
      dispatch(buildingTick(1));
    }
  };
};

class BuildingsBackend extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("mounted");
    this.timerID = setInterval(this.props.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return <div />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildingsBackend);
