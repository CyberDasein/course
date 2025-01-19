import { ChangeEvent } from "react";

type Sizes = "m" | "l" | "lg";
type Radiuses = "sm" | "l" | "lg";

type InputProps = {
  label?: string;
  type?: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  description?: string;
  error?: string;
  size?: Sizes;
  radius?: Radiuses;
};
const sizes: Record<Sizes, string> = {
  m: "16px",
  l: "18px",
  lg: "22px",
};
const radiuses: Record<Radiuses, string> = {
  sm: "6px",
  l: "8px",
  lg: "12px",
};

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  icon,
  description,
  error,
  size = "m",
  radius = "sm",
  ...props
}) => {
  return (
    <div style={{ fontSize: sizes[size] }}>
      {description && <p style={{ fontSize: "0.8em" }}>{description}</p>}
      <label>
        {label}
        {icon && <span style={{ marginRight: "0.5rem" }}>{icon}</span>}
        <input
          style={{ borderRadius: radiuses[radius] }}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          {...props}
        />
      </label>
      {error && (
        <p style={{ fontSize: "0.8em", color: "red", margin: 0 }}>{error}</p>
      )}
    </div>
  );
};

export default Input;
