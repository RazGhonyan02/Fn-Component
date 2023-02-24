import { connect } from "react-redux";
import { LOGIN, LOGOUT } from "../redux/reducers/LoginReducer";
import Login from "../pages/auth/Login/Login";
import { login, logout } from "../redux/actions/LoginActions";

const mapStateToProps = ({ token }) => {
  return { token };
};
const mapDispatchToProps = (dispatch) => ({
  login: () => {
    dispatch(login);
  },
  logout: () => {
    dispatch(logout);
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
