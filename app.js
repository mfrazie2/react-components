// TODO
var GroceryList = () => (
  <ul>
    <Garbage />
    <Trash />
  </ul>
);

var Garbage = () => (
  <li>Garbage</li>
);

var Trash = () => (
  <li>Trash</li>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));