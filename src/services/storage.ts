export const setItem = (key: string, item: any): void =>
  window.localStorage.setItem(key, JSON.stringify(item));

export const setItems = (items: { key: string; value: any }[]): void =>
  items.forEach((item) => window.localStorage.setItem(item.key, JSON.stringify(item.value)));

export const getItem = (key: string): any => {
  try {
    return JSON.parse(window.localStorage.getItem(key) || '');
  } catch (e) {
    return null;
  }
};

export const getItems = (...keys: string[]): any[] => keys.map((key) => getItem(key));

export const removeItem = (key: string): void => window.localStorage.removeItem(key);

export const removeItems = (...keys: string[]): void =>
  keys.forEach((key) => window.localStorage.removeItem(key));
