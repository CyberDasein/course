import { useState, useEffect, useCallback } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  }
];

export default function useLocalStorage(key: string): ReturnType<UseLocalStorage> {
  const [value, setValue] = useState<LocalStorageReturnValue>(() => {
    const storageValue = localStorage.getItem(key);
    return storageValue !== null ? JSON.parse(storageValue) : null;
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Ошибка записи в localStorage:", error);
    }
  }, [key, value]);

  const setItem = useCallback((newValue: LocalStorageSetValue) => {
    setValue(newValue);
  }, []);

  const removeItem = useCallback(() => {
    setValue(null);
  }, []);

  return [value, { setItem, removeItem }]
}
