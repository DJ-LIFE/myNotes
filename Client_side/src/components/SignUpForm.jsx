import authStore from "../stores/authStore"
import { useNavigate } from "react-router-dom";
export default function SignUpForm() {
    const store = authStore();
    const navigate = useNavigate();
    const handleSignUp = async(e) => {
        e.preventDefault();
        await store.signup();
        navigate("/login");
    };
  return (
    <div>
        <form onSubmit={handleSignUp}>
        <input
          onChange={store.updateSignUpForm}
          value={store.signUpForm.email}
          type="email"
          name="email"
        />
        <input
          onChange={store.updateSignUpForm}
          value={store.signUpForm.password}
          type="password"
          name="password"
        />
        <button type="submit">SignUp</button>
      </form>
      
    </div>
  )
}

