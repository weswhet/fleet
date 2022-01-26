/* eslint-disable jsx-a11y/label-has-for */
import React, { ChangeEvent, useEffect, useState } from "react";
import classnames from "classnames";

interface IAutoSizeInputFieldProps {
  name: string;
  placeholder: string;
  value: string;
  inputClassName?: string;
  hasError?: boolean;
  isDisabled?: boolean;
  onFocus: () => void;
  onBlur: () => void;
  onChange: (newSelectedValue: string) => void;
}

const baseClass = "component__auto-size-input-field";

const TeamsDropdown = ({
  name,
  placeholder,
  value,
  inputClassName,
  hasError,
  isDisabled,
  onFocus,
  onBlur,
  onChange,
}: IAutoSizeInputFieldProps): JSX.Element => {
  const [inputValue, setInputValue] = useState(value);

  const inputClasses = classnames(baseClass, inputClassName, "no-hover", {
    [`${baseClass}--disabled`]: isDisabled,
    [`${baseClass}--error`]: hasError,
    [`${baseClass}__textarea`]: true,
  });

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue]);

  const onInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const onInputFocus = () => {
    onFocus();
  };

  const onInputBlur = () => {
    onBlur();
  };

  return (
    <div className={baseClass}>
      <label className="input-sizer" data-value={inputValue}>
        <textarea
          name={name}
          id={name}
          onChange={onInputChange}
          placeholder={placeholder}
          value={inputValue}
          className={inputClasses}
          cols={12}
          rows={1}
          tabIndex={0}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
        />
      </label>
    </div>
  );
};

export default TeamsDropdown;
