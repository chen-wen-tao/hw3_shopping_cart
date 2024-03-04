import React, { useRef } from "react";
import PropTypes from "prop-types";


export default function CreateProductForm({onAddProduct}){
    const nameRef = useRef();
    const priceRef = useRef();

    const onAddProductHelper = (e) => {
        e.preventDefault();

        onAddProduct(nameRef.current.value, +priceRef.current.value);
    };

    return(
        <div>
            <h2>Create Product Form</h2>
            
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" ref={nameRef}/>
                <label for="price">Price:</label>
                <input type="text" id="price" name="price" ref={priceRef}/>
                <button className="btn btn-primary" onClick={onAddProductHelper}>
                    Add Product
                </button>
            </form>
            
        </div>
    );
}

CreateProductForm.propTypes = {
    onAddProduct: PropTypes.func.isRequired,
}