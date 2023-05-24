export const InputText = (
  { inputType, style, inputStyle, children, max, className, placeholder },
  htmlFor
) => {
  return (
    <label style={style} className="post-form-label" htmlFor={htmlFor}>
      {children}
      <input
        placeholder={placeholder}
        max={max}
        style={inputStyle}
        id={htmlFor}
        className="input-text"
        type={inputType ? inputType : "text"}
      />
    </label>
  );
};
