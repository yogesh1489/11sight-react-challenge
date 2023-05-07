import { Link } from "react-router-dom";
import classes from "./HistoryItem.module.css";

const HistoryItem = (props) => {

  return (
    <li className={classes.container}>
      <Link to={`/${props.name}`} className={classes.item}>
        <div>{props.name}</div>
        <div>{props.timeStamp}</div> 
      </Link>
    </li>
  );
};

export default HistoryItem;
