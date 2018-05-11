import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/actions/cart-actions";

const mapStateToProps = function(state) {
  return {
    cart: state.shoppingCart.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: () => {
      dispatch(addToCart("Flour 10kg", 2, 110));
    }
  };
};

const renderProduct = props => {
  return (
    <p>
      allo {props.cart.length}
      <span> </span>
      <a className="btn" onClick={props.addToCart}>
        Add
      </a>
    </p>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(renderProduct);
