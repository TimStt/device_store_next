export const timer = (ms: number, action?: () => void) => {
  return setTimeout(() => {
    if (action) action();
  }, ms);
};
