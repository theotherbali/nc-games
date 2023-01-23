import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../utils/api";

export const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    getUsers()
      .then((users) => {
        setUsers(users);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  if (isError) {
    return (
      <section>
        <p>There's been an error</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <main>
      <h2> Users</h2>

      <section className="UserList">
        <ul className="List">
        {users.map(({ username, name, avatar_url }) => {
          return (
            <section className="UserCardList" key={username}>
             <Link to={`/users/${username}`} className="CardLinks">
              <li className="UserCard">
             
                <img
                  className="userImage"
                  src={avatar_url}
                  alt={username}
                />
                <section className="userDetails">
                  <h3 className="username">{username}</h3>
                  <p className="realName">{name}</p>
                </section>
                
              </li></Link>
            </section>
          );
        })}</ul>
      </section>
    </main>
  );
};
