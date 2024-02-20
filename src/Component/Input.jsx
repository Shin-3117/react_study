import { useState } from "react";

const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };
  console.log(value);
  return { value, onChange };
};

const Input = () => {
  const name = useInput("my name is");

  return (
    <>
      <input {...name} />
    </>
  );
};

export default Input;
