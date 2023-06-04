export const pipe = function (...fns) {
  return (args) => fns.reduce((acc, fn) => fn(acc), args);
};

export const extendArrayPrototype = () => {
  Array.prototype.pipe = function (...fns) {
    return this.map(pipe(...fns));
  };
};
