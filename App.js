// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "this is the content 2"
// );
// empty bracket were used for the attribute we can add attribute
//h1 will has prop which will have the children and id i.e. attributes in it.

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "children1" }, [
    React.createElement("h1", { id: "child1" }, "this is children1 .1"),
    React.createElement("h2", { id: "child2" }, "this is children1 .2"),
  ]),
  React.createElement("div", { id: "children2" }, [
    React.createElement("h1", { id: "child1" }, "this is children2 .1"),
    React.createElement("h2", { id: "child2" }, "this is children2 .2"),
  ]),
]);
console.log(heading); // this will be the object created by the javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // this will help to convert the object to the tag
