export const random = (a, b) => {
  const alpha = Math.random();
  return a * (1.0 - alpha) + b * alpha;
};

export const debounce = (func, wait, immediate) => {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const lerp = (start, end, t) => {
  return start * (1 - t) + end * t;
};

export function autoBind(obj) {
  for (let key of Object.getOwnPropertyNames(obj.constructor.prototype)) {
    const val = obj[key];
    if (key !== "constructor" && typeof val === "function") {
      obj[key] = val.bind(obj);
    }
  }
}
