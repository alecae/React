import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "./Login.module.css";

function Login() {

  // Statut
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    navigate("/Dashboard")
  };

  //   erreur message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="erreur">{errorMessages.message}</div>
    );

  // Login
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
        {isSubmitted ? <div>Vous êtes bien connecté</div> : renderForm}
      </div>
    </div>
  );


}


export default Login;