import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";
import Main from "./views/Main/Main";
import Detail from "./components/Detail/Detail";
import Update from "./components/Update/Update";









function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home"  />} />  {/* redirection */}
        <Route path="/home" element={<Main />} />
        <Route path="/products/:id" element={<Detail />}/>
        <Route path="/products/edit/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
