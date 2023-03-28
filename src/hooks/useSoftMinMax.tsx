import { useEffect, useState } from "react";

export const useSoftMinMax = (
  inputValue: string,
  softMin?: number,
  softMax?: number,
) => {
  const [beyondSoftLimit, setBeyondSoftLimit] = useState<boolean>(false)

  useEffect(() => {
    if (softMin && softMax && (Number(inputValue) < softMin || Number(inputValue) > softMax)) {
      setBeyondSoftLimit(true)
    } else {
      setBeyondSoftLimit(false)
    }
  }, [setBeyondSoftLimit, inputValue, softMax, softMin]);

  return beyondSoftLimit
};
  