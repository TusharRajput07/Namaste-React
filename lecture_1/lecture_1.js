// Code for hello world with React

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*
    About the code:
    createElement() takes 3 arguments : the type of tag, attributes and the childrens(single or multiple)
    => the createElement line does not create an HTML element. It creates a javaScript object that contains
    all the info about the element you want to make.(like it's type, attributes, and it's children. in this order)
    => createRoot creates a root element. and it basically refers to the block you want to render the stuff in. everything will be rendered here for now.
    => the root.render() takes an object as argument (here "heading"). It first creates an html element of h1 and then puts the h1 tag element inside the root.
*/

//----------------------------------------------------------------------------------------------------------

/*
    creating this structure with react:

    <div id = "parent">
        <div id = "child">
            <h1>I am an h1 tag</h1>
        </div>
    </div>
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am an h1 tag")
//   )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/*
    About the code:
    as the create element takes three arguments : the type, attributes, and childrens.
    We can manipulate the children section to create a heirarchial structure
*/

//----------------------------------------------------------------------------------------------------------

/*
    creating this structure with react:

    <div id = "parent">
        <div id = "child">
            <h1>I am an h1 tag</h1>
            <h2>I am an h2 tag</h2>
        </div>
    </div>
*/

/*
    here we can see that the child has two childrens. h2 and h2. 
    multiple childrens can be put inside an array of childrens.
*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am an h1 tag"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ])
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//----------------------------------------------------------------------------------------------------------

/*
    Now, creating this structure with react:

    <div id = "parent">
        <div id = "child1">
            <h1>I am an h1 tag of child1</h1>
            <h2>I am an h2 tag od child1</h2>
        </div>
        <div id = "child2">
            <h1>I am an h1 tag of child2</h1>
            <h2>I am an h2 tag of child2</h2>
        </div>
    </div>
*/

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
    now this code looks more complex than the original html code itself. we'll study 
    something known as JSX to improve on this.
*/

//----------------------------------------------------------------------------------------------------------

/*
    Question:
    what will happen if we already have something inside the root div where 
    we are going to put the parent div?
    say the root div already had an h1 tag inside it? Will the parent div be
    rendered below it ? above it?

    => The new parent element that we are rendering will replace the already 
    existing h1 tag inside the root div.
    Beacuse the code flows top to bottom. The h1 was put inside the root div 
    as the script tag was not read yet. And then the render function basically
    does not care what's already inside the root. It replaces everything with
    the new react elements.
*/

/*
    Question:
    The same above question but the html structure looks like this:

    <h1>A text above root</h1>
    <div id = "root">
        <h1>An already present text</h1>
    </div>
    <h1>A text below root</h1>

    => The render function will only affect/replace the root elements.It only
    renders stuff inside the root. It has nothing to do with what's above or 
    below the root div.
*/

/*
    root.render(object) function
    => takes a javaScript object as an argument. The javaScript object contains
    information about the html element to be made. It then creates an html element
    from that information. Or some can say it converts the object into an html element.
    And finally renders the html element into the root element.
*/

//----------------------------------------------------------------------------------------------------------
