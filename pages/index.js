import React from 'react';
import axios from 'axios';
import ProductList from '../components/Index/ProductList';

function Home({ products }) {
  return <ProductList products={products} />;
}

// getInitialProps allows the page to wait for data before rendering starts.
Home.getInitialProps = async () => {
  // fetch data in server
  const url = 'http://localhost:3000/api/products';
  const response = await axios.get(url);
  return { products: response.data };
  // return response data as an object
  // note: this object will be merged with existing prop
};

export default Home;
