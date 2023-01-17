import React, { useState } from "react";
import ErrorModal from "./UI/ErrorModal";
import AddUser from "./Users/AddUser";
import UsersList from "./Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const adduserHandler = (uName, uAge) => {
    console.log(uName, uAge);
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id:Math.random().toString() }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={adduserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
