const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am an h1 tag of child1"),
        React.createElement("h2", {}, "I am an h2 tag of child1")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am an h1 tag of child2"),
        React.createElement("h2", {}, "I am an h2 tag of child2")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); /*
  Everything we did in the lecture 2 :
  
*/ 

//# sourceMappingURL=lecture_2.1dc8cdf4.js.map
