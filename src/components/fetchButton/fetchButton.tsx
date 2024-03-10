import { useDebounce } from "../../hooks/useDebounce";
import { Loader } from "../animations/loader/loader";
import { Button } from "../ui/button/button";

const API_URL: string = "https://jellybellywikiapi.onrender.com/api/Beans/";

interface FetchButtonProps {
  fetchData: (url: string, options?: RequestInit) => Promise<void>;
  isLoading: boolean;
}

export default function FetchButton({
  fetchData,
  isLoading,
}: FetchButtonProps) {
  const getRandomJelly = useDebounce(() => {
    const randomId = Math.floor(Math.random() * 140); // id is up to 115, but I added more to trigger an error as well
    fetchData(API_URL + randomId);
  });

  return (
    <Button disabled={isLoading} onClick={() => getRandomJelly()}>
      {isLoading ? <Loader /> : "Fetch Data"}
    </Button>
  );
}
