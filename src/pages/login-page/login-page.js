import { Button, Container } from "../../components";

export const LoginPage = () => {
  return (
    <Container style={{ marginTop: "60px", height: "100vh" }}>
      <p className="login-page__logo">Pressa</p>
      <div className="login-page__form-wrapper">
        <form className="login-page__form">
          <p className="login-page__form-title">Tizimga kirish</p>
          <div className="login-page__input-wrapper">
            <input
              className="login-page__form-input"
              type="text"
              placeholder="Login"
            />
            <input
              className="login-page__form-input"
              type="password"
              placeholder="Parol"
            />
            <span className="login-page__forgot-pass">
              Parolni unutdingizmi?
            </span>
          </div>
          <div className="login-page__button-wrapper">
            <button className="login-page__form-button">Kirish</button>
          </div>
        </form>
      </div>
    </Container>
  );
};
