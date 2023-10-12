import "./Card.css";

function Card(props) {
  // console.log('Card::', props)
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
