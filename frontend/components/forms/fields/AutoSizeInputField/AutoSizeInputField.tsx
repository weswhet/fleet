/* eslint-disable jsx-a11y/label-has-for */
import React, { ChangeEvent, useState } from "react";

interface IAutoSizeInputFieldProps {
  placeholder: string;
  value: string;
  error: string;
}

const baseClass = "component__auto-size-input-field";

const TeamsDropdown = ({
  placeholder,
  value,
  error,
}: IAutoSizeInputFieldProps): JSX.Element => {
  const [inputValue, setInputValue] = useState(value);

  const onInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.currentTarget.value);
  };

  return (
    <div className={baseClass}>
      <label className="input-sizer" data-value={inputValue}>
        <textarea
          onChange={onInputChange}
          rows={1}
          placeholder={placeholder}
          value={inputValue}
        />
      </label>
    </div>
  );
};

export default TeamsDropdown;
