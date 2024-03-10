import GlutenFreeIcon from "./components/icons/GlutenFreeIcon";
import KosherFoodIcon from "./components/icons/KosherFoodIcon";
import SeasonalIcon from "./components/icons/seasonalIcon";
import SugarFreeIcon from "./components/icons/sugarFreeIcon";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "./components/ui/accordion/accordion";
import {
  Card,
  CardContent,
  CardHead,
  CardText,
} from "./components/ui/card/card";
import { useFetchData } from "./hooks/useFetchData";
import FetchButton from "./components/fetchButton/fetchButton";
import { ErrorAlertHandler } from "./components/errorHandler/errorHandler";

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
  const { fetchData, data, isLoading, error } = useFetchData<FetchDataResult>();

  return (
    <main>
      <div className="container">
        <FetchButton fetchData={fetchData} isLoading={isLoading} />
      </div>
      <div className="container">
        {data ? (
          <Card>
            <CardHead style={{ background: data.backgroundColor }}>
              {data.flavorName}
              <img
                src={data.imageUrl}
                alt={data.flavorName}
                style={{ maxHeight: "70px", margin: "-1em 0" }}
              />
            </CardHead>
            <CardContent>
              <CardText bold>Description:</CardText>
              <CardText>{data.description}</CardText>

              <Accordion>
                <AccordionTrigger>Show ingredients</AccordionTrigger>
                <AccordionContent>
                  {data.ingredients.map((item: string) => (
                    <li key={item}>{item}</li>
                  ))}
                </AccordionContent>
              </Accordion>
              <>
                <CardText className="cardText-icons">
                  <div title="Kosher Food">
                    <KosherFoodIcon
                      style={{ opacity: data.kosher ? 1 : 0.33 }}
                    />
                  </div>
                  <div title="Sugar Free">
                    <SugarFreeIcon
                      style={{ opacity: data.sugarFree ? 1 : 0.33 }}
                    />
                  </div>
                  <div title="Gluten Free">
                    <GlutenFreeIcon
                      style={{ opacity: data.glutenFree ? 1 : 0.33 }}
                    />
                  </div>
                  <div title="Seasonal">
                    <SeasonalIcon
                      style={{ opacity: data.seasonal ? 1 : 0.33 }}
                    />
                  </div>
                </CardText>
              </>
            </CardContent>
          </Card>
        ) : (
          ""
        )}
      </div>
      {error ? <ErrorAlertHandler error={error} /> : ""}
    </main>
  );
}

export default App;
