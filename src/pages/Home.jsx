import React, { useEffect, useState } from 'react'
import { RotatingLines} from "react-loader-spinner"
import ProductTile from '../components/ProductTile';

function Home() {

  const [loading,setloading]=useState(false);
  const [products,setProducts]=useState(null);

  async function fetchAllProducts(){
    setloading(true);
    try {
      
      const res=await fetch("https://fakestoreapi.com/products")
      const data=await res.json();
      
      if(data){
        console.log(data);
        setProducts(data);
        setloading(false);
      }
    } catch (error) {
      console.log(error.message);
      setloading(false);
    }
  }

  useEffect(()=>{
 fetchAllProducts();
  },[])



  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      {loading ? (
        <div>
          <RotatingLines
            height={"120"}
            width={"120"}
            color="grey"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((productItem) => (
                <ProductTile key={productItem.id} product={productItem} />
              ))
            : null}
        </div>
      )}
    </div>
  );
}

export default Home
