import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { ThreeItemGrid } from "../components/Grid/ThreeItem";
import { Product } from "../types/main";

const ProductListingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((response) => {
      response.json().then((data) => setData(data));
    });
  }, []);
  return (
    <div>
      <ThreeItemGrid data={data} />
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
