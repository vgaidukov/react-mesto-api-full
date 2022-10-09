function Input({
    type,
    id,
    name,
    className,
    placeholder,
    required,
    minLength,
    maxLength,
    value,
    onChange
}
) {
    return (
        <input
            type={type}
            id={id}
            name={name}
            className={className}
            placeholder={placeholder}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            value={value || ''}
            onChange={onChange}
        />
    )
}

export default Input;