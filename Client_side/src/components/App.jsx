import LoginPage from "../pages/LoginPage";
import NotesPage from "../pages/NotesPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import SignUpPage from "../pages/SignUpPage";
import LogOutPage from "../pages/LogOutPage";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>

        </ul>
          <Routes>
            <Route index element={<RequireAuth><NotesPage /></RequireAuth>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/logout" element={<LogOutPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
