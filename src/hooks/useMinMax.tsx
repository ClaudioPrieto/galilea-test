import { useEffect, useState } from "react";

export const useMinMax = (
  inputValue: string,
  step: number,
  min?: number,
  max?: number,
): boolean[] => {
  const [beyondMinLimit, setBeyondMinLimit] = useState<boolean>(false)
  const [beyondMaxLimit, setBeyondMaxtLimit] = useState<boolean>(false)
  
  useEffect(() => {
    if (min && Number(inputValue) - step < min) {
      setBeyondMinLimit(true)
    } else {
      setBeyondMinLimit(false)
    }
    if (max && Number(inputValue) + step > max) {
      setBeyondMaxtLimit(true)
    } else {
      setBeyondMaxtLimit(false)
    }
  }, [inputValue, max, min, step, setBeyondMinLimit, setBeyondMaxtLimit]);

  return  [beyondMinLimit, beyondMaxLimit]
};
