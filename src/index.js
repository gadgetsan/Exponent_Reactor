import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import Hello from "./Hello";
import ProductContainer from "./Components/Containers/ProductContainer";
import Store from "./Redux/store.js";
import { addToCart } from "./Redux/actions/cart-actions";
import { updateCart } from "./Redux/actions/cart-actions";
import { deleteFromCart } from "./Redux/actions/cart-actions";

const styles = {
  textAlign: "center"
};

function App(props) {
  return (
    <Provider store={Store}>
      <div style={styles}>
        <Hello name="Test" other="Other Test" />
        <h4>Start typing to see some magic happen {"\u2728"}</h4>
        <ProductContainer />
      </div>
    </Provider>
  );
}

render(<App />, document.getElementById("root"));

Store.dispatch(addToCart("Coffee 500gm", 1, 250));
Store.dispatch(addToCart("Flour 1kg", 2, 110));
Store.dispatch(addToCart("Juice 2L", 1, 250));
Store.dispatch(updateCart("Flour 1kg", 5, 110));
Store.dispatch(deleteFromCart("Coffee 500gm"));
