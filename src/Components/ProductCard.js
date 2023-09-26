import React from 'react';

function ProductCard({ product, index,placeholders,numCols }) {
  
    const generateGridStyles = (i) => {
      const gridRow = i + placeholders * Math.floor((index) / numCols);
      const gridColumn = 1 + ((index) % numCols);
      return {
        gridRow,
        gridColumn,
      };
    };
  
    return (
      <div style={{ ...generateGridStyles(1), display: 'contents' }}>
        <div style={{ ...generateGridStyles(2), marginTop: index >= numCols ? 20 : 0, marginBottom: 10 }}>
          <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height:100 }} />
        </div>
        <div style={{ ...generateGridStyles(3), marginBottom: 10, backgroundColor: '#808080' }}>
          <strong>{product.title} ${product.price}</strong>
        </div>
        <div style={{ ...generateGridStyles(4), marginBottom: 10, backgroundColor: '#C0C0C0' }}>
          {product.description}
        </div>
        <div style={{ ...generateGridStyles(5), backgroundColor: '#696969', display: 'flex', justifyContent: 'space-between' }}>
          <button>VIEW</button>
          <button>ADD</button>
        </div>
      </div>
    );
  }


export default ProductCard;