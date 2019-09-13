export const timer = (callback: () => void) => {
  setTimeout(() => {
    callback();
    setTimeout(() => {
      callback();
    });
  }, 3 * 1000);
};
