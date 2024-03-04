import React from "react";
import PropTypes from "prop-types";

export default function ShoppingCart( {productsToBuy, removeProductToBuy} ) {
    const remove = (product) => {
        console.log("remove ", product.name)
        removeProductToBuy(product);
    }

    const renderProductToBuy = (product, i) => (
        <li key={i}>
            
            {product.name} ${product.price}
            
            <button className="btn btn-outline-primary btn-sm" onClick={() => remove(product)}>remove</button>
        </li>
    );

    

    return (
        <div>
            <ul>{productsToBuy.map(renderProductToBuy)}</ul>
            Total: ${" "}{productsToBuy.reduce( (preTotal, product) => preTotal + product.price, 0)}
        </div>
    );
}

ShoppingCart.propTypes = {
    productToBuy: PropTypes.object.isRequired,
};