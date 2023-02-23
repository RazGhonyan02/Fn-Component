import { connect } from "react-redux";
import CounterPage from "../pages/CounterPage/CounterPage";
import { decrement, increment } from "../redux/actions/CounterAction";

const mapStateToProps = (counter) => {
  return { counter };
};
const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch(increment);
  },
  decrement: () => {
    dispatch(decrement);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
