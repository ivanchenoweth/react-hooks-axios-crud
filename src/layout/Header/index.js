import React from "react";
import { HeaderComponent } from "./HeaderComponent";

export default function HeaderApp({appName}) {
  return (
    <article>
      <HeaderComponent
        onCreateAccount={() => {
          alert("create account");
        }}
        onLogin={function noRefCheck() {
          alert("login");
        }}
        onLogout={function noRefCheck() {
          alert("logout");
        }}
        user={{}}
        appName={appName}
      />

      <section>
        <h3>Obteniendo una estructura modular</h3>

        <hr></hr>

        <a href="https://react-hooks-axios-crud.netlify.app">Run on line</a>

        <hr></hr>

        <p>
          Bienvenido a esta versión GMSO V1.3.0 intentamos poder aprender y
          capacitarnos para elaborar una propuesta para seguir las mejores
          prácticas.
        </p>
        <p>
          Es bien sabido que el uso de buenas practicas son para lograr los mas
          posibles atributos de calidad en una aplicación en el ciclo de
          desarrollo de software. Las mejores prácticas que defino aquí no son
          fórmulas mágicas que solucionarán y mejorarán todos los proyectos.
          Pero considero que son una base de ideas y convenciones que creo que
          vale la pena probar. Con suerte, pueden ayudar a usted y a su equipo a
          tener una mejor experiencia de desarrollador y, en última instancia,
          ofrecer un mejor software a la comunidad.
        </p>

        <hr></hr>

        <p>
          Entre estas mejores practicas que estamos alcanzando. estan en
          procurar:
        </p>
        <ul>
          <li>
            Seguir usando TDD, para evitar escribir codigo innecesario,
            desarrollo agil entre otros beneficios
          </li>
          <li>
            Crear componentes de forma independiente y mostrar componentes de
            forma interactiva en un entorno de desarrollo aislado
          </li>
          <li>
            Usar las mínimas librerias, para evitar los conflictos y migraciones
          </li>
          <li>
            Estructurar en forma modular, para tener todo lo mas escalable
            posible{" "}
          </li>
        </ul>

        <hr></hr>

        <p>
          Este desarrollo de la estructura modular, esta muy afin a la siguiente
          lista de guías de enlaces :
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
                Por qué los desarrolladores deberían modularizar sus
                aplicaciones en el Frontend
              </a>
            </p>
          </li>

          <li>
            <p>
              <a href="https://jsmanifest.com/14-beneficial-coding-tips-to-write-clean-code-in-react/">
                Tips para escribir Clean-code en React
              </a>
            </p>
          </li>

          <li>
            <p>
              <a href="https://dev.to/martinrojas/storybook-best-practices-5kk">
                Mejores practicas para usar componentes en un entorno aislado
                (TDD)
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

        <p>Caracteristicas por hacer (TODO):</p>
        <ul>
          <li>Github actions + Automatic testing</li>
          <li>Authentications: JWT Auth, Oauth2 + PKCE</li>
          <li>Router</li>
          <li>i18n</li>
          <li>Yup and Forms</li>
          <li>Redux/Mobx</li>
          <li>SonarCube Integration</li>
          <li>Optimizing React Performance</li>
          <li>Realtime database and noSQL (RethinkDB/ParseDB/Redis)</li>
          <li>Create a CRM</li>
        </ul>

        <hr></hr>

        <p>Variables de ambiente:</p>

        <small>
          You are running this application in <b>{process.env.NODE_ENV}</b>{" "}
          mode.
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
      </section>
    </article>
  );
}
