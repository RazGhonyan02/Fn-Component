import { NavLink } from "react-router-dom";
import styles from "./Error.module.scss";

const Error404 = () => {
  return (
    <div className={styles.container}>
      <h1>Not Found Page</h1>
      <NavLink to="/">Go To Home Page</NavLink>
    </div>

  );
};
export default Error404;
