// TODO
var GroceryList = () => (
  // <ul>
  //   <Garbage />
  //   <Trash />
  // </ul>
  <GroceryListItem items={["Garbage", "Trash"]} />
);

var Garbage = () => (
  <li>Garbage</li>
);

var Trash = () => (
  <li>Trash</li>
);

var GroceryListItem = (props) => (
  <ul>
    <li> {props.items[0]} </li>
    <li> {props.items[1]} </li>
  </ul>
)

ReactDOM.render(<GroceryList />, document.getElementById("app"));
