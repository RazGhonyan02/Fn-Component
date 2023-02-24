import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Form from "../../../components/Form/Form";
import Button from "../../../ui-kit/components/Button/Button";
import Input from "../../../ui-kit/components/Input/Input";
import "../Auth.scss";

const Register = () => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  const { username, password } = data;
  const onChange = ({ currentTarget: { name, value } }) => {
    setData({ username, password, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setUsers((prevState) => [...prevState, { username, password }]);
    setData({ username: "", password: "" });
  };
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  });

  return (
    <div className="container">
      <Form className="form" onSubmit={onSubmit}>
        <Input
          placeholder="Login"
          type="text"
          name="username"
          value={username}
          onChange={onChange}
        />
        <Input
          placeholder="Password"
          type="text"
          name="password"
          value={password}
          onChange={onChange}
        />
        <Button text="SignUp" disabled={username.length === 0 || password.length === 0} />
        <NavLink to="/login" className="link">Login</NavLink>
      </Form>
    </div>
  );
};
export default Register;
