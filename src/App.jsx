import React, { useState } from "react";

import ProductsList from "./components/ProductsList.jsx";
import CreateProductForm from "./components/CreateProductForm.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const [productsToBuy, setProductsToBuy] = useState([])
  
  const [totalpage, setTotalPage] = useState(1);


  const updateTotalPage = () => {
    setTotalPage(totalpage + 1)
  }

  const onAddProductToBuy = (product) => {
    setProductsToBuy([...productsToBuy, product])
  }

  const removeProductToBuy = (product) => {
    var array = [...productsToBuy];
    var index = array.indexOf(product)
    if (index !== -1) {
      array.splice(index, 1);
      setProductsToBuy(array);
    }
  }

  const onAddProduct = (name, price) => {
    setProducts([
      ...products,
      {
        id: products.at(-1).id + 1,
        name: name,
        price: price,
        image: "https://via.placeholder.com/150",
      },
    ]);
    console.log(totalpage * 3);
    console.log(products.length);
    if (products.length >= totalpage * 3){
      updateTotalPage();
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <h1>Basic Shopping Site</h1>

          <ProductsList products={products} onAddProductToBuy={onAddProductToBuy} totalpage={totalpage}/>

          <CreateProductForm onAddProduct={onAddProduct}/>

        </div>
        {/* col-8 */}


        <div className="col-4">
          <h2>Shopping Cart</h2>
          <ShoppingCart productsToBuy={productsToBuy} removeProductToBuy={removeProductToBuy} />
        </div>
      </div>
    </div>
  );
}