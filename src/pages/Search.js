import { useDispatch } from "react-redux";
import { userActions } from "../store";
import { useRef, useState } from "react";
import User from "../components/User";
import classes from "./Search.module.css";
import Button from "../UI/Button";
import Error from "../components/Error";

const GITURL = "https://api.github.com/users/";

const Search = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState();
  const [formInput, setFormInput] = useState("");
  const [error, setError] = useState(false);
  let enteredUser = useRef();

  const fetchUser = async () => {
    let url = GITURL.concat(enteredUser.current.value);

    const response = await fetch(url);
    if (response.status === 200) {
      setError(false);
      const data = await response.json();
      setUser({
        avatarUrl: data.avatar_url,
        name: data.name,
        email: data.email,
        bio: data.bio,
        publicReposCount: data.public_repos,
        reposUrl: data.repos_url,
      });
      const searchedUser = {
        name: enteredUser.current.value,
        timeStamp: new Date().toLocaleTimeString(),
      };
      dispatch(userActions.addUser(searchedUser));
    } else {
      setError(true);
    }
    setFormInput("");
  };

  const submitUserHandler = (event) => {
    event.preventDefault();
    setUser(null);
    fetchUser();
  };

  const inputChangeHandler = (event) => {
    setFormInput(event.target.value);
  };

  return (
    <div>
      <form onSubmit={submitUserHandler}>
        <div className={classes["form-control"]}>
          <input
            type="text"
            ref={enteredUser}
            onChange={inputChangeHandler}
            value={formInput}
            required
            placeholder="Enter User"
          />
          <Button type="submit">
            Submit
          </Button>
        </div>
      </form>
      {user && (
        <User
          imageUrl={user.avatarUrl}
          name={user.name}
          email={user.email}
          bio={user.bio}
          publicReposCount={user.publicReposCount}
          reposUrl={user.reposUrl}
        />
      )}
      {error && <Error message="User not found!!!"/>}
    </div>
  );
};

export default Search;
