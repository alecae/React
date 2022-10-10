import React, { useState } from "react";
import ReactDOM from "react-dom";

import style from "./Login.module.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "Mauvais identifiant",
    pass: "Mauvais mot de pasee"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="erreur">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className={style.loginform}>
      <form onSubmit={handleSubmit}>
        <div className={style.inputcontainer}>
          <label>Identifiant </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className={style.inputcontainer}>
          <label>Mot de passe </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className={style.button}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className={style.form}>
      <div className={style.loginform}>
        <div className={style.title}>Connexion</div>
        {isSubmitted ? <div>Vous êtes bien connecter</div> : renderForm}
      </div>
    </div>
  );
}


export default Login;