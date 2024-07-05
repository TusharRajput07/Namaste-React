import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag of child1"),
    React.createElement("h2", {}, "I am an h2 tag of child1"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag of child2"),
    React.createElement("h2", {}, "I am an h2 tag of child2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

/*
  Everything we did in the lecture 2 :

  package/dependencies :
  => a package is basically a library or pre-written code that you can use for your convinience. It is also called dependencies (we'll use the word dependencies). 

  npm : 
  => npm is a public site where all the libraries and frameworks are hosted. all of them. 
  => npm is a package manager. So we will first install npm into our project.

  in the terminal write:
  npm init

  so npm wil be installed and now you can install the dependencies of your choice.
  after installing nmp. you'll notice a new file name package.json in the folder.

  dependencies types : 
  1. dev dependency - used while development
  2. normal dependency - used for production

  talking about dependencies. an example of a dependency is a "bundler" (bundles the files together and shit)
  different bundlers out there : webpack, parcel, wheat. we are going to apply parcel a lot now.

  installing packages from npm : 
  installing parcel (or any other package), we use this command
  => npm install -D parcel
  => -D means dev dependency

  now new things will appear

  package.json : 
  => it contains the surface level but important info about the packages. like the version no., and dependencies of a dependency, etc.
  the version in package.json is written in two ways, caret and tilde.
  1. caret - "version : ^2.8.3 (if minor updates come, it updates to them automatically)
  2. tilde - "version : ~2.8.3" (for major updates. not used generally)
  you can also write the version without any caret or tilde if you want.

  package-lock.json : 
  => like package-json. but very larger than that. keeps track of the exact versions of the package/dependencies. without tilde or caret. "version : 2.8.3"

  you'll see one more folder automatically appeared.

  node_modules : 
  => it is like a database. it's huge. it contains the actual data and code of the packages. and it contains a lot of other dependencies as one dependencies can be dependendent on many other dependencies(dependency tree). so code for them is also present here.
  so package.josn contains info like version
  and node_modules contains actual data.

  .gitignore : 
  => everything put inside the gitignore file is ignored and not pushed to github.
  => node modules are not pushed to github but the package.json is. this is because if you have pac.json, you can regenerate the node modules easily.

  executing the packages :
  we installed the package parcel but now we'll ignite our app by executing parcel.
  command :
  => npx parcel index.html

  what does parcel does after this command ?
  => parcel creates a local server and then the app is hosted on that server.
  => it'll show build on localhost:1234 something message.

  installing react from npm :
  => npm install react (or just npm i react)
  => npm install react-dom

  react will be installed and you can verify that in the package.json
  "dependencies"{
    "react" : ^18.2.0,
    "react-dom" : ^8.2.0
  }

  now we no longer need CDN links. so remove them.

  error occurred : "react is not defined"
  as we are importing react from node modules we have to use the import statement
  => import React from "react";
  => import ReactDOM from "react-dom"

  error occured : "browser scripts can't have import and export"
  this is because our js file is not a normal js script now. it is imported from node modules so it is a module now. so change the script tag as :
  => <script type="module" src="app.js"></script>

  one more cool thing parcel does :
  HMR : Hot Module Replacement - when you make a change in your project and save it, the browser gets automatically refreshed. kind of like live server.

  List of things parcel do :
  - dev build : hosting on server
  - local server
  - HMR
  - filewatching algorithm : for continuous check of new changes
  - caching - faster builds (.parcel-cache)
  - image optimization
  - minification
  - building
  - compressing
  - consistent hashing
  - code splitting
  - differential bundling : supports older browsers
  - diagnostic
  - Error Handling
  - HTTPs
  - Tree shaking : removes unused code
  - different dev and prod builds

  .parcel-cache :
  => when you create a build for the first time, it takes time. but then the saved data is stored in parcel-cache. the next time you make some changes in the roject and save it, it takes very less time as only the new changes are build this time. parcel-cache is used for previously stored data.

  dist
  => the final thing that get hosted comes from dist. the generated dev build is kept in dist before hosting. 

  * put parcel-cache and dist in .gitignore

  creating a production build : 
  => nps parcel build index.html (only change is "build")
  for prod build parcel will do all the jobs it does like minification, tree shaking etc for making the app fast.
  error : it'll not work yet
  remove main from package.json
x
  Browserslist : (another package we studied)
  => here you tell your project the list of browsers it should be suported in.
  => takes an array of brosers name.
  example : 
  "browserslist" : [
    "last 2 chrome versions"
  ]

*/
