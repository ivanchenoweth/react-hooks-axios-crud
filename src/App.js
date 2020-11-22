import React, { useState, Fragment, useEffect } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";
import UsersXhr from "./xhr/UsersXhr";
import { Button } from "./stories/Button";

const App = () => {
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
    <div className="container">
      <h1>CRUD React App - GMSO V1.3.0</h1>
      <h3>Obteniendo una estructura modular</h3>

      <hr></hr>

      <p>
        Bienvenido a esta versión GMSO V1.3.0 intentamos poder aprender y capacitarnos
        para elaborar una propuesta para seguir las mejores prácticas.
      </p>
      <p>        
        Es bien sabido que el uso de buenas practicas son para lograr los más altos atributos de calidad en una aplicación en el ciclo de desarrollo de software.
        Las mejores prácticas que defino aquí no son fórmulas mágicas que solucionarán y mejorarán todos los proyectos. 
        Pero considero que son una base de ideas y convenciones que creo que vale la pena probar. 
        Con suerte, pueden ayudarlo a usted y a su equipo a tener una mejor experiencia de desarrollador y, en última instancia, ofrecer un mejor software a la comunidad.
      </p>

      <hr></hr>

      <p>
        Entre estas mejores practicas que estamos alcanzando estan en procurar:
      </p>
      <ul>
        <li>Seguir el TDD para evitar escribir codigo innecesario, desarrollo agil entre otros beneficios</li>
        <li>Crear componentes de forma independiente y mostrar componentes de forma interactiva en un entorno de desarrollo aislado</li>
        <li>Usar las mínimas librerias, para evitar los conflictos y migraciones</li>
        <li>Estructurar en forma modular para tener todo escalable (GMSO) </li>
      </ul>

      <hr></hr>

      <p>
        Este desarrollo de la estructura modular, esta muy afin a la siguiente lista de guías de enlaces :
      </p>
      <ul>
        <li>
          <p>
            <a href="https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1">
              Cómo organizar mejor su aplicación de React
            </a>
          </p>
        </li>
        <li>
          <p>
            <a href="https://medium.com/@alexmngn/why-react-developers-should-modularize-their-applications-d26d381854c1">
              Por qué los desarrolladores deberían modularizar sus aplicaciones
              en el Frontend
            </a>
          </p>
        </li>

        <li>
          <p>
            <a href="https://dev.to/martinrojas/storybook-best-practices-5kk">
              Mejores practicas para usar componentes en un entorno aislado (TDD)
            </a>
          </p>
        </li>

        

      </ul>
      <hr></hr>

      <p>Principales librerias usadas (package.json):</p>
      <ul>
        <li>Axios</li>
        <li>Stoyboook</li>
        <li>Jest</li>
      </ul>

      <p>Procesos alcanzados en Devop:</p>
      <ul>
        <li>CICD with netifly</li>
        <li>Backend CICD Heroku</li>
        <li>Stoyboook dashboard deployed</li>
      </ul>

      <hr></hr>

      <p>Features todo:</p>
      <ul>
        <li>Authentications: JWT Auth, Oauth2 + PKCE</li>
        <li>Router+TDD</li>
        <li>i18n</li>
        <li>Yup and Forms</li>
        <li>Redux/Mobx</li>
        <li>SonarCube Integration</li>
        <li>Realtime database and noSQL (RethinkDB/ParseDB/Redis)</li>
      </ul>

      <hr></hr>

      <p>Variables de ambiente:</p>

      <small>
        You are running this application in <b>{process.env.NODE_ENV}</b> mode.
      </small>
      <h6>
        Environment REACT_APP_API_URL from .env or netlify.toml:{" "}
        {process.env.REACT_APP_API_URL}
      </h6>
      <h6>
        Environment REACT_APP_STAGE .env or netlify.toml:{" "}
        {process.env.REACT_APP_STAGE}
      </h6>

      <hr></hr>

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

export default App;
