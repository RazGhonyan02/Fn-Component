import Button from "../../ui-kit/components/Button/Button";
import styles from "./CounterPage.module.scss";

const CounterPage = ({ counter, increment, decrement }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2>{counter}</h2>
        <Button className={styles.button} onClick={increment} text="increment" />
        <Button className={styles.button} onClick={decrement} text="decrement" />
      </div>
    </div>
  );
};
export default CounterPage;
