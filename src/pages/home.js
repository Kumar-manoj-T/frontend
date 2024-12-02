import { fragment, useEffect, useState } from "react";
import ProductCard from "../components/productcard";
export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((res) => res.json())
      .then((res) => setProducts);
  }, []);

  return (
    <fragment>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
          <ProductCard />
        </div>
      </section>
    </fragment>
  );
}
