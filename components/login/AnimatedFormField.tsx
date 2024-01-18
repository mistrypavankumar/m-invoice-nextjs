import React, { ReactEventHandler } from "react";
import "./AnimatedFormField.css";

type AnimatedFormFieldProps = {
  inputType: string;
  labelName: string;
  autoComplete?: string;
  setOnChangeValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const AnimatedFormField = ({
  inputType,
  labelName,
  autoComplete,
  setOnChangeValue,
  value,
}: AnimatedFormFieldProps) => {
  return (
    <div className="flex relative h-[40px] group mb-7">
      <input
        type={inputType}
        value={value}
        onChange={setOnChangeValue}
        placeholder=" "
        className="form__input w-full border-2 border-gray-300 rounded-md  outline-none px-4 group focus-within:border-green-500
        hover:border-gray-400
        bg-transparent
        
        "
        autoComplete={autoComplete ? autoComplete : "off"}
      />
      <label
        htmlFor={inputType}
        className="form__label absolute top-[18%] text-gray-400 left-[4%] bg-white group-focus-within:text-sm
        group-focus-within:text-green-500
        font-medium
         transition-all 
        duration-300
        cursor-text -z-10"
      >
        {labelName}
      </label>
    </div>
  );
};

export default AnimatedFormField;
