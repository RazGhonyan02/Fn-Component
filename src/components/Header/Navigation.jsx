import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink className={({ isActive }) => (isActive ? styles.active : styles.inactive)} to="/">Home</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.active : styles.inactive)} to="/todo">Todo List</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.active : styles.inactive)} to="/count">Counter</NavLink>
    </nav>
  );
};
export default Navigation;
