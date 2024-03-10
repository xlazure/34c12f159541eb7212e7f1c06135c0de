import { Button } from "./components/ui/button/button";
import { useFetchData } from "./hooks/useFetchData";

const API_URL: string = "https://jellybellywikiapi.onrender.com/api/Beans/";

type FetchDataResult = {
  backgroundColor: string;
  flavorName: string;
  imageUrl: string;
  description: string;
  ingredients: string[];
  kosher: boolean;
  seasonal: boolean;
  glutenFree: boolean;
  sugarFree: boolean;
};

function App() {
  const { fetchData, data, isLoading } = useFetchData<FetchDataResult>();

  const getRandomJelly = () => {
    const randomId = Math.floor(Math.random() * 133); // id is up to 115, but I added more to trigger an error as well
    fetchData(API_URL + randomId).then(()=>  console.log(data));

  };


  return (
    <main>
      <div className="container">
        <Button disabled={isLoading} onClick={() => getRandomJelly()}>
          Fetch Data
        </Button>
      </div>
    </main>
  );
}

export default App;
