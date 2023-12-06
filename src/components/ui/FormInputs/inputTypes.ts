import React from 'react';

export interface IFormProps {
  type: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  validateFunction: (name: string) => string[];
  showButton?: React.ReactNode;
}
