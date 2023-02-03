import "./Inputs.scss"

export const Input = ({
    type,
    name,
    placeholder,
    className,
    onChange,
    required,
    value
}) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            className={`input ${className}`}
            onChange={onChange}
            value={value}
        />
    );
};

export const Button = ({ title, onClick, className }) => {
    return (
        <button type="submit" onClick={onClick} className={`button ${className}`}>
            {title}
        </button>
    );
};
