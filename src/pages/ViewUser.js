import { useParams } from "react-router-dom";
import User from "../components/User";
import { useCallback, useEffect, useState } from "react";

const ViewUser = () => {
  const params = useParams();
  const url = "https://api.github.com/users/" + params.id;
  const [user, setUser] = useState();


  const fetchUser = useCallback(async () => {
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      setUser({
        avatarUrl: data.avatar_url,
        name: data.name,
        email: data.email,
        bio: data.bio,
        publicReposCount: data.public_repos,
        reposUrl: data.repos_url,
      });
    }
  }, []);

  useEffect(() => {fetchUser()}, [fetchUser]);


  return (
    <div>
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
    </div>
  );
};

export default ViewUser;
