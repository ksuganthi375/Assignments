import React, { useEffect, useState } from "react";
import axios from "axios";

function Httpmethods_put(){
const updateUser = () => {
  
    axios
      .put("https://dummyjson.com/users/1", {firstName: "Ani", age:30, lastName: "V"})
      .then((res) => {alert("Updated successfully");})
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Update User</h2>
        <button onClick={updateUser}>Update User</button>
    </div>
  );
};

export default Httpmethods_put;
