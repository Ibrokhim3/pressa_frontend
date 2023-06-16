import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "../../components";
import { postsAction, userAction } from "../../store";
import { API_URL } from "../../variables";

export const LoginPage = () => {
  const { list, loading, error, searchValue, dateValue, checkboxDirValue } =
    useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const styles = {
    opacity: loading ? 0.7 : 1,
  };

  const onLoginSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postsAction.setLoading(true));

    const {
      inputPass: { value: password },
      inputLogin: { value: login },
    } = evt.target;

    const user = {
      login,
      password,
    };

    fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status !== 201) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
        return res.json();
      })
      .then((data) => {
        // dispatch(userAction.setLogin(data));
        localStorage.setItem("token", data.token);
        localStorage.setItem("userRole", data.userRole);
        dispatch(postsAction.setLoading(false));
        navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
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
            <button
              style={styles}
              type="submit"
              className="login-page__form-button"
            >
              Kirish
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};
