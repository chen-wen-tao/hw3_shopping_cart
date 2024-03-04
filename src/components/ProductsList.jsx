import PropTypes from "prop-types";
import React, { useState } from "react";
import Product from "./Product";

export default function ProductsList({ products, onAddProductToBuy, totalpage }) {
    const [currentpage, setcurrentPage] = useState(1);
    const previous = () => {
        if (currentpage > 1){
            setcurrentPage(currentpage-1);
        }
    }

    const next = () => {
        if (currentpage < totalpage){
            setcurrentPage(currentpage+1);
        }
    }
    let shown_product = products.slice((currentpage-1) * 3, currentpage*3);

    

    return (
        <>
        <h2>Products</h2>
        <h4>Total of {products.length} products</h4>
        <div className="product pagination">
            Page {currentpage} of {totalpage}
            <button className="btn btn-outline-primary btn-sm" onClick={previous}>Previous</button>
            <button className="btn btn-outline-primary btn-sm" onClick={next}>Next</button>
        </div>
        <div className="products row">
            {shown_product.map((p, i) => (
            <Product key={i} product={p} onAddProductToBuy={onAddProductToBuy}></Product>
            ))}
        </div>
        </>
    );
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};
