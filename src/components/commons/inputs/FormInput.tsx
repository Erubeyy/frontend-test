import './FormInput.scss'

type InputProps = {
  type: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  options?: { value: string | number; label: string }[];
  label?: string;
}

const FormInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  label,
}: InputProps) => {
  return (
    <div className="formInput">
      {label && <label className="formInput__label" htmlFor={name}>{label}</label>}
      <input
        className="formInput__input"
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
