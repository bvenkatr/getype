export const getType = (v: any) => {
  return Object.prototype.toString.call(v).split(" ")[1].slice(0, -1)
    .toLowerCase();
};
