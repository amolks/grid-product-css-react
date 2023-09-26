import React, { useState, useEffect } from 'react';
import ProductCard from './Components/ProductCard';

function App() {

  const numCols = 3;
  const placeholderCount = 4;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://dummyjson.com/products?limit=6')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ width: 750, margin: 'auto' }}>
      <h1>Product CSS Grid</h1>
      <div style={{ gridTemplateColumns: `repeat(${numCols}, 1fr)`, display: 'grid', gridColumnGap: 20 }}>
        {products && products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} numCols={numCols} placeholders={placeholderCount} />
        ))}
      </div>
    </div>
  );
}

export default App;
