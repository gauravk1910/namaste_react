const heading = React.createElement("h1", {
    id: "title"
}, "First react app!");
const heading2 = React.createElement("h2", {
    id: "name"
}, "gaurav is here");
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading2
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing  a react element
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map
