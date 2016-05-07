// TODO
class GroceryListItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      picked: false,
      hovered: false
    };
  }
  
  onListItemClick () {
    this.setState({
      picked: !this.state.picked
    });
  }
  
  onListItemHover () {
    this.setState({
      hovered: !this.state.hovered
    });
  }
  
  render () {
    var style = {
      textDecoration: this.state.picked ? "line-through" : "none",
      fontWeight: this.state.hovered ? "bold" : "normal"
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)} 
        onMouseOver={this.onListItemHover.bind(this)} 
        onMouseOut={this.onListItemHover.bind(this)} > {this.props.item} </li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    { props.items.map( item => 
      <GroceryListItem item={item} />
    )}
  </ul>
);

ReactDOM.render(<GroceryList items={["Garbage","Trash","Stuff"]} />, document.getElementById("app"));


// var Garbage = () => (
//   <li>Garbage</li>
// );

// var Trash = () => (
//   <li>Trash</li>
// );

// var GroceryListItem = (props) => (
//   <ul>
//     <li> {props.items[0]} </li>
//     <li> {props.items[1]} </li>
//   </ul>
// )
