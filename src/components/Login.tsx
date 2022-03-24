import React, { useState } from "react";
import "../styles/login.scss";
import { Link,useHistory } from "react-router-dom";
import { addUser } from "../actions/actions";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
const Login = () => {
  const [isHaveAccount, setIsHaveAccount] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();
  let users = useSelector((state: RootStateOrAny) => {
    return state.users;
  });
  const [inputs, setInputs] = useState({ name: "", subname: "", email: "", password: "", repeatPassword: "" });
  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  function checkUser(email: string, password: string) {
    let isValid=false;
    users.map((user: any) => {
      if (user.email === inputs.email && user.password === inputs.password) {
        isValid=true
        history.push("/main");
        return true
      }
    });
    if(isValid===false){
      alert("Podałeś niepoprawne dane")
    }

  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          {isHaveAccount === true ? (
            <>
            <input className="email concave" name="email" value={inputs.email} onChange={handleChange} placeholder="Email *" type="text" />

            <input
                className="password concave"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                placeholder="Hasło *"
                type="password"
              />

              <button
                className="login-button"
                onClick={() => {
                  checkUser(inputs.email, inputs.password);
                }}
              >
                Zaloguj się
              </button>
              <p
                onClick={() => {
                  setIsHaveAccount(false);
                }}
              >
                Nie masz jeszcze konta? Zarejestruj się
              </p>
            </>
          ) : (
            <>
              <input className="name concave" name="name" value={inputs.name} onChange={handleChange} placeholder="Imię *" type="text" />
              <input className="subname concave" name="subname" value={inputs.subname} onChange={handleChange} placeholder="Nazwisko *" type="text" />
              <input className="email concave" name="email" value={inputs.email} onChange={handleChange} placeholder="Email *" type="text" />
              <input
                className="password concave"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                placeholder="Hasło *"
                type="password"
              />
              <input
                className="repeat-password concave"
                name="repeatPassword"
                value={inputs.repeatPassword || ""}
                onChange={handleChange}
                placeholder="Powtórz hasło *"
                type="password"
              />
              <Link to="/main">
                <button
                  type="submit"
                  className="login-button"
                  onClick={() => {
                    dispatch(addUser(inputs));
                  }}
                >
                  Zarejestruj się
                </button>
              </Link>
              <p
                onClick={() => {
                  setIsHaveAccount(true);
                }}
              >
                Masz już konto? Zaloguj się
              </p>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Login;
