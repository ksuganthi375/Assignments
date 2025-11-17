import React, { useEffect, useState } from "react";
import axios from "axios";

const Httpmethods = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Users List from 1 to 5</h2>
        {users.slice(0, 5).map((user) => (<li key={user.id}>{user.firstName} - {user.lastName} </li>))}
    </div>
  );
};

export default Httpmethods;
