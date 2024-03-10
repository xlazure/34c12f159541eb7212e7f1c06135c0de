import { useCallback, useState } from "react";

interface FetchDataResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
  fetchData: (url: string, options?: RequestInit) => Promise<void>;
}

export function useFetchData<T>(): FetchDataResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async (url: string, options?: RequestInit) => {
    setLoading(true);
    //fake network latency
    setTimeout(async () => {
      try {
        const res = await fetch(url, options);

        if (!res.ok) throw new Error("Not found");

        const data = await res.json();
        setData(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    }, 2000);
  }, []);

  return { fetchData, data, isLoading, error };
}
