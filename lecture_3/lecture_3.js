import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an h1 tag of child1"),
//     React.createElement("h2", {}, "I am an h2 tag of child1"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an h1 tag of child2"),
//     React.createElement("h2", {}, "I am an h2 tag of child2"),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/*
    => changing the "scripts" in package.json.
    => adding new commands for dev and prod builds.
    => so we won't use --npx parcel index.html-- anymore.

    "scripts": {
        "start": "parcel lecture_1/lecture_1.html",
        "build": "parcel build lecture_3.html",
        "start-l2": "parcel lecture_2/lecture_2.html",
        "start-l3": "parcel lecture_3/lecture_3.html",
        "test": "jest"
    },

    new commands :
    npm run start-l3 (or npm start (for start-l1)) - for dev build
    npm run build-l3 - for prod build
  },
*/

//-------------------------------------------------------------------------------------------------------

/*
    Quick recap :
    => React elements are js objects (created from React.createElement). They are not equivalent to html elements. render function makes an html element out of it.
*/

// a normal h1 react element using core react
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from react element"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// doing the same with JSX

/*
    JSX (javascrips xml) :
    => JSX is a javascript library. It is a syntax extension for javascript (used in React).
    => basically it is html like code in java script. "html like".
    => JSX is not html in javascript. it looks like html.
*/

// const jsxheading = <h1 id="jsxheading">Hello World from jsx</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);

/*
    this is not normal javascript code. It is first transpiled before reaching the js engine. transpiled into a form that the browser can understand. 
    who transpiles it ? => Babel and parcel (Babel mainly)
    =>Babel is a js compiler that transpiles the jsx code into react code (a react element(object)).
    JSX code => Babel => React.createElement => react element (object) => render => html element
*/

//-------------------------------------------------------------------------------------------------------

/*
    giving classes to React elements and JSX :
    => use "className" instead of "class".
    NOTE : attributes like className etc have camelCase.

    if writing in multiple lines, wrap the code in curly braces().
*/

// const jsxheading = <h1 className="head">Hello World from jsx</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);

// const myimg = (
//   <img src="https://img.tapimg.net/market/images/a4b370e90527c4d8dd8e2b7426f0f6c3.jpg?imageView2/0/h/270/format/jpg/interlace/1/ignore-error/1" />
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myimg);

//-------------------------------------------------------------------------------------------------------

/*
    Components in React :
    => components are the building blocks of a React app.
    => Two types => Functional components and Class components
*/

/*
    React Functional Components :
    => are normal javascript functions THAT RETURNS A JSX CODE  .
    => that JSX code eventually gets converted into reactElements.
    => always start with a Capital letter.
    => the function can be arrow(mainly used) or normal(with 'function' keyword).
*/

// const HeadingComponent = () => {
//   return <h1>Hello World from functional Component</h1>;
// };

// if single lined, you can get rid of the {} and return keyword.
// const HeadingComponent = () => <h1>Hello World from single lined functional component</h1>;

/*
    root.render() takes a react element as argument. If you want to render a react component, you have to put it in < />
*/

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

// it can also return multiple react elements (nested jsx code)
// if you use braces {}, you have to use return keyword. if you use braces (), you don't have to.

// const HeadingComponent = () => (
//   <div id="container">
//     <h1 id="heading">Hello world from nested jsx code(multiple elements)</h1>;
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

//-------------------------------------------------------------------------------------------------------

// Component inside Component (Component Composition)

// rendering Title inside Heading component

// const Title = () => (
//   <h1 className="head" tabIndex={"5"}>
//     Namaste from inner component
//   </h1>
// );

// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     <h1 id="heading">Hello React Outer Component</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

//-------------------------------------------------------------------------------------------------------

// role of '{}' inside JSX code

// you can run any piece of js expression/code indide '{}' in JSX. (a variablr, calculations, functions, etc)

// const number = 10000;

// const HeadingComponent = () => (
//   <div id="container">
//     {number}
//     <h1 id="heading">Hello React Outer Component</h1>
//   </div>
// );

// or
// const HeadingComponent = () => (
//   <div id="container">
//     <h2>{number}</h2>
//     <h1 id="heading">Hello React Outer Component</h1>
//   </div>
// );

//or
// const HeadingComponent = () => (
//   <div id="container">
//     <h2>{100 + 200}</h2>
//     <h1 id="heading">Hello React Outer Component</h1>
//   </div>
// );

//or
// const HeadingComponent = () => (
//   <div id="container">
//     <h2>{console.log("hello")}</h2>
//     <h1 id="heading">Hello React Outer Component</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

//-------------------------------------------------------------------------------------------------------

// element inside component

// an element is nothing but a js variable at the end of the day. so we can use '{}'

// const title = (
//   <h1 className="head" tabIndex={"5"}>
//     Namaste from element
//   </h1>
// );

// const HeadingComponent = () => (
//   <div id="container">
//     {title}
//     <h1 id="heading">Namaste from Component</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

//-------------------------------------------------------------------------------------------------------

// element inside element

// again, we can use '{}'

const elem = <span>Hello from span element</span>;

const title = (
  <h1 className="head" tabIndex={"5"}>
    {elem}
    Namaste from element
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);

//-------------------------------------------------------------------------------------------------------

// component inside element

// it works. but putting a div inside a h1 in not good.

//-------------------------------------------------------------------------------------------------------

/*

    JSX sanitization :

    if we are fetching data from an api and the api sends some malicious data that can harm our security, and we are using the data inside a component like this :

    const data = api.getData();

    const HeadingComponent = () => (
        <div id="container">
            {data}
            <h1 id="heading">Namaste from Component</h1>
        </div>
    );


    we don't have to worry about anything as JSX does take care of these attacks. JSX sanitizes the data inside '{}' before using it, thus preventing any attacks.
*/

//-------------------------------------------------------------------------------------------------------
