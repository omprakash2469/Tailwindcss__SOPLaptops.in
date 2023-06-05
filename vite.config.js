// vite.config.js
const { resolve } = require("path");

module.exports = {
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        brands: resolve(__dirname, "brands.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        cart: resolve(__dirname, "cart.html"),
        product: resolve(__dirname, "product.html"),
        checkout: resolve(__dirname, "checkout.html"),
      },
    },
  },
};
