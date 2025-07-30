import { useState } from 'react';

type Option = {
  label: string;
  value: string;
};

export const useTypeSelector = (initialValue: string, options: Option[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue);
  
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);
  
  const select = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };
  
  const selectedOption = options.find(option => option.value === selectedValue) || options[0];
  
  return {
    isOpen,
    selectedValue,
    selectedLabel: selectedOption.label,
    toggle,
    close,
    select,
    options
  };
};