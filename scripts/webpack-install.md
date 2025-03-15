1. setup a new node.js project
- create a new directory
```bash
mkdir webpack-project
cd webpack-project
```

- initialize node.js project
```bash
npm init -y
```

2. install webpack and dependencies
```bash
npm install --save-dev webpack webpack-cli webpack-dev-server
```

3. create project structure
   webpack-project/
   ├── src/
   │   └── index.js
   ├── dist/
   │   └── main.js
   ├── webpack.config.js
   └── package.json

4. configure webpack.config.js
   ```
   const path = require('path');

   module.exports = {
     entry: './src/index.js', // Entry point of the app
     output: {
       filename: 'main.js', // Output file name
       path: path.resolve(__dirname, 'dist'), // Output directory
     },
     mode: 'development',
     devServer: {
       static: {
         directory: path.join(__dirname, 'dist'), // Serve files from the 'dist' folder
       },
       open: true,  // Automatically open the browser
       port: 8080,
     },
   };
   ```

5. run server
```bash
npx webpack serve
```

This will start the Webpack Dev Server, which will:
- Watch your files for changes
- Bundle them into a single output file (bundle.js)
- Serve them from the dist/ folder
- Automatically open your default web browser
- You should be able to access your project at http://localhost:8080/.