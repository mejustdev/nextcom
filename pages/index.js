import React from 'react';
import axios from 'axios';
import ProductList from '../components/Index/ProductList';
import baseUrl from '../utils/baseUrl';
import ProductPagination from '../components/Index/ProductPagination';

function Home({ products, totalPages }) {
  return (
    <>
      <ProductList products={products} />
      <ProductPagination totalPages={totalPages} />
    </>
  );
}

// getInitialProps allows the page to wait for data before rendering starts.
Home.getInitialProps = async ctx => {
  // console.log(ctx.query);
  const page = ctx.query.page ? ctx.query.page : '1';
  const size = 9;
  // fetch data in server
  const url = `${baseUrl}/api/products`;
  const payload = { params: { page, size } };
  const response = await axios.get(url, payload);
  return response.data;
  // return response data as an object
  // note: this object will be merged with existing prop
};

export default Home;
