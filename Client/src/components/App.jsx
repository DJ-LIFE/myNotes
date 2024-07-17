import LoginPage from "../pages/LoginPage";
import NotesPage from "../pages/NotesPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RequireAuth from "./RequireAuth";
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

        </ul>
          <Routes>
            <Route index element={<RequireAuth><NotesPage /></RequireAuth>} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
