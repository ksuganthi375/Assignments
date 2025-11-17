import React, { useEffect, useState } from "react";
import axios from "axios";

function Httpmethods(){
const addUser = () => {
  
    axios
      .post("https://dummyjson.com/users/add", {firstName: "Ani", age:30, lastName: "V"})
      .then((res) => alert("User added: " + res.data.lastName))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Add New User</h2>
        <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default Httpmethods_post;
