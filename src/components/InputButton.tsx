import React from "react";

export interface InputButtonProps {
  tag: string
  value: string
  beyondLimit: boolean
  step: number
  onChange: (value: string, min?: number, max?: number) => void
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const InputButton = ({
  tag,
  value,
  beyondLimit,
  step,
  onChange,
  setInputValue,
}: InputButtonProps) => {
  const handleClick = () => {
    const newValue = tag === '+' ? Number(value) + step + '' : Number(value) - step + '' 
    onChange(newValue);
    setInputValue(newValue);
  };

  return (
    <button 
      className={`bg-gray-100 px-3 py-1 rounded text-xl ${beyondLimit ? 'opacity-40' : 'hover:bg-gray-300'}`}
      onClick={handleClick}
      disabled={beyondLimit}
    >{tag}</button>
  );
}

export default InputButton;
