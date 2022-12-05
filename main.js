/**Function to clear terminal when called. */
const clear = () => {
  process.stdout.write("\x1Bc");
};

clear();

const sourceJSON = `{"data":[10,45,81,90,82,6,29,31,22,5,99,27,55,68,17,88,14,47,50,67]}`;
