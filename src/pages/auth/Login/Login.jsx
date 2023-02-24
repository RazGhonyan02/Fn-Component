import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Form from "../../../components/Form/Form";
import { LOGIN } from "../../../redux/reducers/LoginReducer";
import Button from "../../../ui-kit/components/Button/Button";
import Input from "../../../ui-kit/components/Input/Input";
import "../Auth.scss";

const Login = ({ login }) => {
  const navigate = useNavigate();
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const onChange = ({ currentTarget: { name, value } }) => {
    setData({ ...data, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const foundUser = users.find((item) => item.username === data.username
      && item.password === data.password);
    if (foundUser) {
      login();
      return navigate("/");
    }
    return navigate("/login");
  };

  return (
    <div className="container">
      <Form onSubmit={onSubmit} className="form">
        <Input placeholder="Login" name="username" value={data.username} onChange={onChange} />
        <Input placeholder="Password" name="password" value={data.password} onChange={onChange} />
        <Button text="Login" />
        <NavLink to="/reg" className="link">Registration</NavLink>
      </Form>
    </div>
  );
};
export default Login;
