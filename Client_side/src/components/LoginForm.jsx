import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    await store.login();

    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          onChange={store.updateLoginForm}
          value={store.loginForm.email}
          type="email"
          name="email"
        />
        <input
          onChange={store.updateLoginForm}
          value={store.loginForm.password}
          type="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
