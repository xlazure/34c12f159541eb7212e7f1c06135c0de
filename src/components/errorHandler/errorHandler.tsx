import { useEffect, useState } from "react";
import ErrorIcon from "../icons/ErrorIcon";
import { Alert, AlertCloseButton, AlertPosition } from "../ui/alert/alert";

export function ErrorAlertHandler({ error }: any) {
  const [errors, setErrors] = useState<any>([]);

  const handleCloseAlert = (id: number) => {
    const filter = errors.filter((_:any, index: number) => index !== id);
    setErrors(filter);
  };

  useEffect(() => {
    setErrors((values:any) => [...values, error]);
  }, [error]);

  const AlertsBlueprint = (error:any, index:number) => (
    <Alert key={index}>
      <ErrorIcon /> {String(error)}
      <AlertCloseButton onClick={() => handleCloseAlert(index)} />
    </Alert>
  );

  return <AlertPosition>{errors.map(AlertsBlueprint)}</AlertPosition>;
}
