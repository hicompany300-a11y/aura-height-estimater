import { useState, SetStateAction } from 'react';

// FIX: Update type signature to support functional updates for the state setter.
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: SetStateAction<T>) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: SetStateAction<T>) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  // FIX: The original useEffect was removed to fix a bug. It caused an infinite re-render loop
  // when the `initialValue` was a non-primitive (like an array `[]`), because a new reference
  // was created on every render, triggering the effect.
  // Since the `key` used with this hook is static throughout the application, the effect was
  // redundant. The `useState` initializer is sufficient to load the initial value from
  // localStorage just once on component mount.

  return [storedValue, setValue];
}

export default useLocalStorage;