import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

const App = () => {
  const [products, setProducts] = useState([
    { name: 'Product 1', description: 'Description of Product 1', inCart: false },
    { name: 'Product 2', description: 'Description of Product 2', inCart: false },
    { name: 'Product 3', description: 'Description of Product 3', inCart: false }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedProducts = products.map(p => {
      if (p.name === product.name) {
        return { ...p, inCart: !p.inCart };
      }
      return p;
    });
    setProducts(updatedProducts);
    if (product.inCart) {
      setCart(cart.filter(item => item.name !== product.name));
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (product) => {
    const updatedProducts = products.map(p => {
      if (p.name === product.name) {
        return { ...p, inCart: !p.inCart };
      }
      return p;
    });
    setProducts(updatedProducts);
    setCart(cart.filter(item => item.name !== product.name));
  };

  return (
    <div className="app">
      <ProductList products={products} addToCart={addToCart} />
      <ShoppingCart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
