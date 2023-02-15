import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../pages/auth/Login/Login";
import Register from "../../pages/auth/Registration/Register";
import Error404 from "../../pages/Error Page/Error404";
import Home from "../../pages/Home/Home";
import TodoList from "../../pages/TodoList/TodoList";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import Header from "../Header/Header";

const AppLayout = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<PrivateRoute><Home /></PrivateRoute>}
          />
          <Route
            path="todo"
            element={<PrivateRoute><TodoList /></PrivateRoute>}
          />
          <Route
            path="/login"
            element={<PublicRoute><Login /></PublicRoute>}
          />
          <Route
            path="/reg"
            element={<PublicRoute><Register /></PublicRoute>}
          />
          <Route
            path="*"
            element={<Error404 />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default AppLayout;
