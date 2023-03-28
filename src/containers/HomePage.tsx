import '../style/index.css'
import NumberInput from '../components/NumberInput';
import { FC, useState } from 'react';
import { checkMinMax } from '../helpers/checkMinMax';

const HomePage: FC = () => {

  const [value, setValue] = useState<string>('50')

  const handleChange = (value: string, min?: number, max?: number, precision?: number, setInputValue?: any) => {
    setValue(checkMinMax(value, min, max, precision))
    if (setInputValue) setInputValue(checkMinMax(value, min, max, precision))
  }

  const toggle = (value: boolean) => {
    return !value;
  }

  const [step, setStep] = useState<string>('1');
  const [min, setMin] = useState<string>('10');
  const [max, setMax] = useState<string>('100');
  const [softMin, setSoftMin] = useState<string>('30');
  const [softMax, setSoftMax] = useState<string>('80');
  const [precision, setPrecision] = useState<string>('0');
  const [editable, setEditable] = useState<boolean>(true);

  return (
    <div className='main-container flex flex-col items-center'>
      <div className='mt-2'>
        Step: <input value={step} onChange={e => setStep(e.target.value)} type='number' />
        Min: <input value={min} onChange={e => setMin(e.target.value)} type='number' />
        Max: <input value={max} onChange={e => setMax(e.target.value)} type='number' />
        Soft Min: <input value={softMin} onChange={e => setSoftMin(e.target.value)} type='number' />
        SoftMax: <input value={softMax} onChange={e => setSoftMax(e.target.value)} type='number' />
        Precision: <input value={precision} onChange={e => setPrecision(e.target.value)} type='number' />
        Editable: <input checked={editable} onChange={() => setEditable(toggle)} type='checkbox' />
      </div>
      <NumberInput
        value={value}
        onChange={handleChange}
        step={Number(step)}
        min={Number(min)}
        max={Number(max)}
        softMin={Number(softMin)}
        softMax={Number(softMax)}
        precision={Number(precision)}
        editable={editable}
      />
      <p>{value}</p>
    </div>
  );
}

export default HomePage;
