import React from 'react';
import Input from '../atoms/Input';

interface FormFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormField: React.FC<FormFieldProps> = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
      <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default FormField;
