import { useCallback, useEffect, useRef, useState } from "react";

export const useThrottledCallback = <TArgs extends unknown[]>(
  callback: (...args: TArgs) => void,
  delay = 500,
) => {
  const lastRunRef = useRef(0);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback(
    (...args: TArgs) => {
      const now = Date.now();

      if (now - lastRunRef.current < delay) return;

      lastRunRef.current = now;
      callbackRef.current(...args);
    },
    [delay],
  );
};

export const useThrottledValue = <TValue,>(value: TValue, delay = 400) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRunRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const now = Date.now();
    const remaining = delay - (now - lastRunRef.current);

    if (remaining <= 0) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      lastRunRef.current = now;
      setThrottledValue(value);
      return;
    }

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      lastRunRef.current = Date.now();
      setThrottledValue(value);
      timeoutRef.current = null;
    }, remaining);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [delay, value]);

  return throttledValue;
};
