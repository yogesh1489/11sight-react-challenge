import React, { useState, useEffect } from "react";
import Repo from "./Repo";
import classes from "./User.module.css";
import Button from "../UI/Button";

const User = (props) => {
  const [repos, setRepos] = useState(null);

  async function fetchReposHandler() {
    const response = await fetch(props.reposUrl);
    const data = await response.json();
    setRepos(
      data.map((repo) => {
        return {
          name: repo.name,
          description: repo.description,
          url: repo.url,
        };
      })
    );
  }


  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.image}><img src={props.imageUrl} alt='User Avatar' /></div>
        
        <div className={classes.container1}>
          {props.name && <p>{props.name}</p>}
          {props.email && <p>{props.email}</p>}
          {props.bio && <p>{props.bio}</p>}
          {props.reposUrl && <p>{props.reposUrl}</p>}
          {props.publicReposCount && (
            <p>{props.publicReposCount} public repos</p>
          )}
          <Button onClick={fetchReposHandler} type="button">
            Fetch Repos
          </Button>
        </div>
      </div>
      {repos &&
        repos.map((repo) => {
          return (
            <Repo
              key={Math.random()}
              name={repo.name}
              description={repo.description}
              url={repo.url}
            />
          );
        })}
    </React.Fragment>
  );
};

export default User;
