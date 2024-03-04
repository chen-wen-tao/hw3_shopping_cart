import React, { useState, useEffect } from "react";

import ProductsList from "./components/ProductsList.jsx";
import CreateProductForm from "./components/CreateProductForm.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import { myFirebase } from "./models/MyFirebase.js";

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

  const [productsToBuy, setProductsToBuy] = useState([]);
  
  const [totalpage, setTotalPage] = useState(1);

  useEffect ( () => {
    const getProducts = async() => {
      const products = await myFirebase.getProducts();
      // console.log(products);
      setProducts(products);
    }
    getProducts();
  }, [])


  useEffect ( () => {
    const getProductsToBuy = async() => {
      const productsTB = await myFirebase.getProductsToBuy();
      setProductsToBuy(productsTB);
    }
    getProductsToBuy();
  }, [])

  const updateTotalPage = () => {
    setTotalPage(totalpage + 1)
  }

  useEffect (() =>{
    if (products.length >= totalpage * 3){
      updateTotalPage();
    }
  },[])

  const onAddProductToBuy = (product) => {
    // useEffect ( () => {
    //   const addProductsToBuy = async({product}) => {
    //     const productsTB = await myFirebase.addProductsToBuy(product);
    //   }
    //   addProductsToBuy();
    // }, [])
    myFirebase.addProductToBuy(product);


    // setProductsToBuy([...productsToBuy, product])
  }

  const removeProductToBuy = (product) => {
    myFirebase.removeProductToBuy(product);
    // var array = [...productsToBuy];
    // var index = array.indexOf(product)
    // if (index !== -1) {
    //   array.splice(index, 1);
    //   setProductsToBuy(array);
    // }
  }

  const onAddProduct = (name, price) => {
    myFirebase.addProduct(name, price);

    setProducts()
    // setProducts([
    //   ...products,
    //   {
    //     id: products.at(-1).id + 1,
    //     name: name,
    //     price: price,
    //     image: "https://via.placeholder.com/150",
    //   },
    // ]);
    // console.log(totalpage * 3);
    // console.log(products.length);
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