# RCB Hackathon Create-React-App & Mongoose Cli Demo

### Description: This is a simple application built with create-react-app & mongoose cli to demonstrate the quick set up and prototyping.

You can find links to create-react-app & mongoose cli below:
* [Create-React-App](https://github.com/facebookincubator/create-react-app "Create React App")
* [Mongoose Cli](https://www.npmjs.com/package/mongoose-cli "Mongoose Cli")

### Setup Directions:
```
1. clone repo
2. cd into hackathon project
3. npm install or yarn add  
4. npm start
5. cd into client
6. npm start
7. Check localhost:3000 in browser
```

### Mongoose Model set up directions
```
mongoose init

mongoose generate model expert first:string last:string position:string img:string linkedin:string github:string twitter:string bio:string

update url string in connection file

update seedfile.js to utilize data.json

mongoose seed
