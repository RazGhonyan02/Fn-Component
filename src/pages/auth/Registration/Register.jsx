import { useState } from "react";
import { NavLink } from "react-router-dom";
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
  const onChange = ({ currentTarget: { name, value } }) => {
    setData({ ...data, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setData({ username: "", password: "" });
    setUsers((prevState) => [...prevState, { data }]);
    localStorage.setItem("users", JSON.stringify(users));
  };
  return (
    <div className="container">
      <Form className="form" onSubmit={onSubmit}>
        <Input
          placeholder="Login"
          type="text"
          name="username"
          value={data.username}
          onChange={onChange}
        />
        <Input
          placeholder="Password"
          type="text"
          name="password"
          value={data.password}
          onChange={onChange}
        />
        <Button text="SignUp" />
        <NavLink to="/login" className="link">Login</NavLink>
      </Form>
    </div>
  );
};
export default Register;
