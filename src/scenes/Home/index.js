import React, { useState, Fragment, useEffect } from "react";
import AddUserForm from "./components/users/forms/AddUserForm";
import EditUserForm from "./components/users/forms/EditUserForm";
import UserTable from "./components/users/tables/UserTable";
import UsersXhr from "../../services/api/UsersXhr";
import { Button } from "../../stories/Button";
import HeaderApp from "../../layout/Header/index";

const Home = ({ appName }) => {
  // Setting state
  const [users, setUsers] = useState([]);
  const initialFormState = { id: null, firstName: "", lastName: "" };
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  useEffect(
    () => {
      // Run once, after mounting
      const fetchData = async () => {
        try {
          // await only works inside an async function.
          const res = await UsersXhr.getAllUsersXhr();
          setUsers(res.data);
        } catch (e) {
          console.log(e);
        }
      };
      fetchData();
    },
    [] // dependencies [] is renderings only if the 'any []' state value changes
  );

  function addUser(user) {
    const tryAddUser = async () => {
      try {
        let res = await UsersXhr.addUserXhr(user);
        user.id = res.data.id; // assign the new id to the user
        setUsers([...users, user]); // all the user + the new user to the states
      } catch (e) {
        console.log(e);
      }
    };
    tryAddUser();
  }

  const deleteUser = (id) => {
    const deleteData = async () => {
      try {
        await UsersXhr.deleteUser(id);
        setEditing(false);
        setUsers(users.filter((user) => user.id !== id)); // delete the user in the state
      } catch (e) {
        console.log(e);
      }
    };
    deleteData();
  };

  const updateUser = (id, updatedUser) => {
    const updateData = async () => {
      try {
        await UsersXhr.updateUserXhr(updatedUser);
        setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
      } catch (e) {
        console.log(e);
      }
    };
    setEditing(false);
    updateData();
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
    });
  };

  return (
    <div>
      <HeaderApp appName={appName} />
      
      <Button
        label="Button Primary"
        onClick={() => {
          alert("test click");
        }}
        primary
      />

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

export default Home;
