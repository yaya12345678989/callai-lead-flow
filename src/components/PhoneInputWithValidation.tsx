
import React from 'react';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { Check } from 'lucide-react';
import 'react-phone-number-input/style.css';
import './phone-input-styles.css';

interface PhoneInputWithValidationProps {
  value: string;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  className?: string;
}

const PhoneInputWithValidation: React.FC<PhoneInputWithValidationProps> = ({
  value,
  onChange,
  placeholder = "Numéro de téléphone",
  className = ""
}) => {
  const isValid = value && isValidPhoneNumber(value);

  return (
    <div className={`relative ${className}`}>
      <PhoneInput
        international
        countryCallingCodeEditable={false}
        defaultCountry="FR"
        value={value}
        onChange={onChange}
        className="phone-input-custom"
        placeholder={placeholder}
        style={{
          '--PhoneInput-color--focus': '#ffffff',
          '--PhoneInputInternationalIconPhone-opacity': '0.8',
          '--PhoneInputInternationalIconGlobe-opacity': '0.65'
        }}
      />
      {isValid && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <div className="flex items-center justify-center w-5 h-5 bg-green-500 rounded-full">
            <Check size={12} className="text-white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneInputWithValidation;
