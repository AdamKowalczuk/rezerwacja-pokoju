import { useState } from "react";
import "../styles/login.scss";
import { useHistory } from "react-router-dom";
import { addUser, changeActualUser } from "../actions/actions";
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
const Login = () => {
  const [isHaveAccount, setIsHaveAccount] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();
  let users = useSelector((state: RootStateOrAny) => {
    return state.users;
  });
  const validEmail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
  const [inputs, setInputs] = useState({ name: "", subname: "", email: "", password: "", repeatPassword: "", reservations: [] });
  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  function checkUser(email: string, password: string) {
    let isValid = false;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === inputs.email && users[i].password === inputs.password) {
        isValid = true;
        dispatch(changeActualUser(i));
        history.push("/main");
        return true;
      }
    }
    if (isValid === false) {
      alert("Podałeś niepoprawne dane");
    }
  }

  function validate(email: string, password: string, repeatPassword: string) {
    if (!validEmail.test(inputs.email)) {
      alert("Email nie jest poprawne!");
    } else if (inputs.password !== inputs.repeatPassword) {
      alert("Hasła nie są takie same!");
    } else {
      dispatch(changeActualUser(users.length));
      history.push("/main");
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
              <button
                type="submit"
                className="login-button"
                onClick={() => {
                  validate(inputs.email, inputs.password, inputs.repeatPassword);
                  dispatch(addUser(inputs));
                }}
              >
                Zarejestruj się
              </button>
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
