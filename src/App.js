import React from 'react';

function App() {
  const numCols = 3;
  const componentsArea = ['image', 'header', 'description', 'button'];

  const products = [
    {
      id:1,
      img: 'https://placehold.co/200x100',
      title: 'Card Title 1',
      description: '',
      buttonText: 'BUTTON',
    },
    {
      id:2,
      img: 'https://placehold.co/200x100',
      title: 'Card Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      buttonText: 'BUTTON',
    },
    {
      id:3,
      img: 'https://placehold.co/200x100',
      title: 'Card Title 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      buttonText: 'BUTTON',
    },
    {
      id:4,
      img: 'https://placehold.co/200x100',
      title: 'Card Title 4',
      description: 'Lorem ipsum dolor sit amet',
      buttonText: 'BUTTON',
    },
    {
      id:5,
      img: 'https://placehold.co/200x100',
      title: 'Card Title 5',
      description: 'Lorem ipsum dolor sit amet',
      buttonText: 'BUTTON',
    },
    {
      id:6,
      img: 'https://placehold.co/200x100',
      title: 'Card Title 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      buttonText: 'BUTTON',
    },
    {
      id:7,
      img: 'https://placehold.co/200x100',
      title: 'Card Title 7',
      description: 'Lorem ipsum',
      buttonText: 'BUTTON',
    },
    {
      id:8,
      img: 'https://placehold.co/200x100',
      title: 'Card Title 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      buttonText: 'BUTTON',
    },
    {
      id:9,
      img: 'https://placehold.co/200x100',
      title: 'Card Title 9',
      description: 'Lorem',
      buttonText: 'BUTTON',
    },
    {
      id:10,
      img: 'https://placehold.co/200x100',
      title: 'Card Title 10',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      buttonText: 'BUTTON',
    },
  ];

  const generateGridStyles = (i, j) => {
    const gridRow = i + componentsArea.length * Math.floor((j - 1) / numCols);
    const gridColumn = 1 + ((j - 1) % numCols);
    return {
      gridRow,
      gridColumn,
    };
  };

  return (
    <div style={{ width: 750, margin: 'auto' }}>
      <h1>Product CSS Grid</h1>
      <div style={{ gridTemplateColumns: `repeat(${numCols}, 1fr)`, display: 'grid', gridColumnGap: 20 }}>
        {products && products.map((product, index) => (
          <div key={product.id} style={{ ...generateGridStyles(1, index + 1), display: 'contents' }}>
            <div style={{ ...generateGridStyles(2, index + 1), marginTop: index >= numCols ? 20 : 0, marginBottom: 10 }}>
              <img src={product.img} alt={product.title} style={{ width: '100%' }} />
            </div>
            <div style={{ ...generateGridStyles(3, index + 1), marginBottom: 10, backgroundColor:'#808080' }}><strong>{product.title}</strong></div>
            <div style={{ ...generateGridStyles(4, index + 1), marginBottom: 10,backgroundColor:'#C0C0C0' }}>{product.description}</div>
            <div style={{ ...generateGridStyles(5, index + 1),backgroundColor:'#696969',display:'flex',justifyContent:'space-between' }}><button>{product.buttonText} 1</button><button>{product.buttonText} 2</button></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
