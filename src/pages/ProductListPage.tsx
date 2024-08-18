import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { ThreeItemGrid } from "../components/Grid/ThreeItem";

const ProductListingPage = () => {
  const { state } = useCart();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((response) => {
      response.json().then((data) => setData(data));
    });
    console.log("Page loaded", data);
  }, []);
  console.log(state);
  return (
    <div>
      <ThreeItemGrid data={data} />
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
