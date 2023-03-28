/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from "react";
import debounce from "lodash/debounce";
import InputButton from "./InputButton";
import { useMinMax } from "../hooks/useMinMax";
import { useSoftMinMax } from "../hooks/useSoftMinMax";

const DEBOUNCE_TIME = 800

export interface NumberInputProps {
  value: string
  step?: number
  min?: number
  max?: number
  softMin?: number
  softMax?: number
  editable?: boolean
  precision?: number
  onChange: (value: string, min?: number, max?: number, precision?: number) => void
}

const NumberInput = ({
  value,
  step = 1,
  min,
  max,
  softMin,
  softMax,
  precision,
  editable,
  onChange,
}: NumberInputProps) => {
  const [inputValue, setInputValue] = useState<string>('0')

  const beyondSoftLimit = useSoftMinMax(inputValue, softMin, softMax)
  const [beyondMinLimit, beyondMaxLimit] = useMinMax(inputValue, step, min, max)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    debouncedChangeHandler(newValue, min, max, precision);
  };

  const debouncedChangeHandler = useCallback(
    debounce(onChange, DEBOUNCE_TIME)
  , []);

  return (
    <div className="flex m-10 gap-2">
      <InputButton 
        tag={"-"}
        value={value}
        onChange={onChange}
        beyondLimit={beyondMinLimit || !editable}
        setInputValue={setInputValue}
        step={step}
      />
      <div className="flex flex-col mt-2">
        <input
          type="number"
          className={`input-shadow rounded text-center ${beyondSoftLimit ? 'text-red-500' : 'text-black'}`}
          onChange={handleChange}
          value={inputValue}
          disabled={!editable}
        />
      </div>
      <InputButton
        tag={"+"}
        value={value}
        onChange={onChange}
        beyondLimit={beyondMaxLimit || !editable}
        setInputValue={setInputValue}
        step={step}
      />
    </div>
  );
}

export default NumberInput;
