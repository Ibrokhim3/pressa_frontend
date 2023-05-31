import { useNavigate } from "react-router-dom";
import { Button, Container } from "../../components";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLoginSubmit = (evt) => {
    evt.preventDefault();

    const {
      inputPass: { value: password },
      inputLogin: { value: login },
    } = evt.target;

    const user = {
      login,
      password,
    };

    fetch("http://localhost:2001/pressa/login", {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
      })
      .catch((err) => {
        alert(err);
      });
    navigate("/admin-panel");
  };

  return (
    <Container style={{ marginTop: "60px", height: "100vh" }}>
      <p className="login-page__logo">Pressa</p>
      <div className="login-page__form-wrapper">
        <form onSubmit={onLoginSubmit} className="login-page__form">
          <p className="login-page__form-title">Tizimga kirish</p>
          <div className="login-page__input-wrapper">
            <input
              id="inputLogin"
              className="login-page__form-input"
              type="text"
              placeholder="Login"
            />
            <input
              id="inputPass"
              className="login-page__form-input"
              type="password"
              placeholder="Parol"
            />
            <span className="login-page__forgot-pass">
              Parolni unutdingizmi?
            </span>
          </div>
          <div className="login-page__button-wrapper">
            <button type="submit" className="login-page__form-button">
              Kirish
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};
