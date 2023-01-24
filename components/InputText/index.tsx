import React from 'react';

type InputTextProps = {
  type: any;
  onChange: any;
};

const InputText = ({ type, onChange }: InputTextProps) => {
  return (
    <div className="w-full rounded-xl h-full  drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
      <input
        type={type}
        onChange={onChange}
        className="p-2 h-full placeholder:text-slate-900 font-normal w-full rounded-xl"
        placeholder={`${type} `}
      />
    </div>
  );
};

export default InputText;
