const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://react-next-e-commerce.herokuapp.com'
    : 'http://localhost:3000';

export default baseUrl;
