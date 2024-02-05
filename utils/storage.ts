import secureLocalStorage from "react-secure-storage";

const setItem = (key: string, value: string) =>
  secureLocalStorage.setItem(key, value);

const getItem = (key: string) => secureLocalStorage.getItem(key);

const removeItem = (key: string) => secureLocalStorage.removeItem(key);

const clear = () => secureLocalStorage.clear();

export default {
  clear,
  getItem,
  removeItem,
  setItem,
};
