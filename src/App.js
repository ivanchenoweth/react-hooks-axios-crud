import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";

const App = () => {

  const [users, setUsers] = useState([]); 
  const initialFormState = { id: null, firstName: "", lastName: "" };

  // Setting state
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // Initial ajax call to fill setUsers
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${process.env.REACT_APP_API_URL}/artists`,
      );
      setUsers(result.data);
      console.log(result);
    };
    fetchData();
  }, []);

  // CRUD operations
  function addUser(user) {
    const updateData = async () => {
      const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/artists`, user
      );
      console.log(result);
      setUsers([...users, user]);
    };
    updateData();

  }

  const deleteUser = (id) => {
    console.log(id);
    setEditing(false);
    setUsers(users.filter((user) => user.id !== id));
    const deleteData = async () => {
      const result = await axios.delete(
        `${process.env.REACT_APP_API_URL}/artists/${id}`
      );
      console.log(result);
    };
    deleteData();
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    const updateData = async () => {
      const result = await axios.put(
        `${process.env.REACT_APP_API_URL}/artists/${id}`, updatedUser
      );
      console.log(result);
      setUsers(users.map((user) => (user.id === id ? updatedUser : user))); 
    };
    updateData();
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, firstName: user.firstName, lastName: user.lastName });
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks+Axios V1.2</h1>
      <h2>CICD netifly</h2>
      <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
      <h6>Environment REACT_APP_API_URL from .env or netlify.toml: {process.env.REACT_APP_API_URL}</h6>
      <h6>Environment REACT_APP_STAGE .env or netlify.toml: {process.env.REACT_APP_STAGE}</h6>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
