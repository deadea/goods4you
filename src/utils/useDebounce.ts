import { useEffect, useRef } from 'react';

type CallbackFunction = (...args: any[]) => void;

type Timeout = ReturnType<typeof setTimeout>

export const useDebounce = (callback: CallbackFunction, delay: number) => {
  const timeoutRef = useRef<Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback: CallbackFunction = (...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};