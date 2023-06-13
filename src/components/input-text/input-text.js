export const InputText = (
  {
    id,
    inputType,
    style,
    inputStyle,
    children,
    max,
    className,
    placeholder,
    onChange,
    pattern
  },
  htmlFor
) => {
  return (
    <label style={style} className="post-form-label" htmlFor={htmlFor}>
      {children}
      <input
        pattern={pattern}
        onChange={onChange}
        placeholder={placeholder}
        max={max}
        style={inputStyle}
        id={id}
        className="input-text"
        type={inputType ? inputType : "text"}
      />
    </label>
  );
};
