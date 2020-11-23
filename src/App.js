import React from "react";
import Home from "./scenes/Home/index"

const App = () => {
  let appName = "CRUD React App - GMSO V1.3.0";
  return (
    <div className="container">
      
      <Home appName={appName} />
    </div>
  );
};

export default App;
