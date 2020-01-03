// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      'mongodb+srv://mergorgec:mypassword@reactreserve-fzux2.mongodb.net/test?retryWrites=true&w=majority',
    JWT_SECRET: 'mysecret',
    CLOUDINARY_URL: 'https://api.cloudinary.com/v1_1/mergorgec/image/upload',
    STRIPE_SECRET_KEY: 'sk_test_6l3WQXCjANY0gAV5ObHaUuM1005LEbrWKN',
  },
};
