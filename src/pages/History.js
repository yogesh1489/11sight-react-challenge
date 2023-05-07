import { useSelector,useDispatch } from "react-redux";
import { userActions } from "../store";

import styles from "./History.module.css";
import HistoryItem from "../components/HistoryItem";

const History = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => {
    return state;
  });

  
  const storedUsers = JSON.parse(localStorage.getItem("users"));


  if(users.length === 0 && storedUsers) {
    storedUsers.map((user) => {
          return (dispatch(userActions.addUserFromStorage(user)));
        });
     localStorage.removeItem("users");
  }


  window.onbeforeunload = (event) => {
    if (users.length > 0) localStorage.setItem("users", JSON.stringify(users));  
  };

  return (
    <ul className={styles.list}>
      {users.map((user) => {
        return (
          <HistoryItem
            key={user.timeStamp}
            name={user.name}
            timeStamp={user.timeStamp}
          />
        );
      })}
    </ul>
  );
};

export default History;
