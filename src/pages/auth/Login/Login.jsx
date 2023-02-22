import { useState } from "react";
import { NavLink } from "react-router-dom";
import Form from "../../../components/Form/Form";
import Button from "../../../ui-kit/components/Button/Button";
import Input from "../../../ui-kit/components/Input/Input";
import "../Auth.scss";

const Login = ({ state, dispatch }) => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    name: '',
    password: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("token", true);
  };
  const onChange = ({ currentTarget: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  return (
    <div className="container">
      <Form onSubmit={onSubmit} className="form">
        <Input placeholder="Login" name="name" value={data.name} onChange={onChange} />
        <Input placeholder="Password" name="password" value={data.password} onChange={onChange} />
        <Button text="Login" />
        <NavLink to="/reg" className="link">Registration</NavLink>
      </Form>
    </div>
  );
};
export default Login;
