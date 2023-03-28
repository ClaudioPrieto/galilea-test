import { useEffect, useState } from "react";

export const useMinMax = (
  inputValue: string,
  step: number,
  min?: number,
  max?: number,
) => {
  const [beyondMinLimit, setBeyondMinLimit] = useState<boolean>(false)
  const [beyondMaxLimit, setBeyondMaxtLimit] = useState<boolean>(false)
  
  useEffect(() => {
    if (min !== undefined && Number(inputValue) - step < min) {
      setBeyondMinLimit(true)
    } else if (max !== undefined && Number(inputValue) + step > max) {
      setBeyondMaxtLimit(true)
    } else {
      setBeyondMinLimit(false)
      setBeyondMaxtLimit(false)
    }
  }, [inputValue, max, min, step, setBeyondMinLimit, setBeyondMaxtLimit]);

  return  [beyondMinLimit, beyondMaxLimit]
};
