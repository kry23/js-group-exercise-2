/**Function to clear terminal when called. */
const clear = () => {
  process.stdout.write("\x1Bc");
};

clear();
