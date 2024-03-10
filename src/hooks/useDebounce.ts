import { useCallback, useRef } from "react";

export const useDebounce = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number = 500
) => {
  const timeoutRef = useRef<number | null>(null);

  useCallback(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args: Parameters<T>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};
