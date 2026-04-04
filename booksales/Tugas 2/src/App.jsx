import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/shared/Header";
import Home from "./Pages";
import Books from "./Pages/books";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/register";
import Team from "./components/shared/Team";
import Contact from "./components/shared/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container mt-4">
        <Routes>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
