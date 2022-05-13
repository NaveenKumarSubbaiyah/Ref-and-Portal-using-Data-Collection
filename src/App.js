import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [userListEnable, setUserListEnable] = useState(false);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      setUserListEnable(true);
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      {userListEnable && <UsersList users={usersList} />}
    </Fragment>
  );
}

export default App;
