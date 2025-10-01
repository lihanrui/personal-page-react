/* eslint-disable no-console */

export const Storage = {
  get(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.warn(`Failed to parse localStorage item "${key}":`, error);
      localStorage.removeItem(key); // Clean up corrupted data
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Failed to save to localStorage "${key}":`, error);
    }
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};
