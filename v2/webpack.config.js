// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of the app
  output: {
    filename: 'main.js', // Change this to 'main.js'
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from the 'dist' folder
    },
    open: true,  // Automatically open the browser
    port: 8080,  // You can specify the port you want
  },
};
