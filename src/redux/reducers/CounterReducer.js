export const PlUS = "PLUS";
export const MINUS = "MINUS";

export const counterRreducer = (counter = 0, { type }) => {
  switch (type) {
    case PlUS:
      return counter + 1;
    case MINUS:
      return counter - 1;
    default:
      return counter;
  }
};
