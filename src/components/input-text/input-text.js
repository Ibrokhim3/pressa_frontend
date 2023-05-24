export const InputText = (
  { inputType, style, inputStyle, children, max, className },
  htmlFor
) => {
  return (
    <label style={style} className="post-form-label" htmlFor={htmlFor}>
      {children}
      <input
        max={max}
        style={inputStyle}
        id={htmlFor}
        className="input-text"
        type={inputType ? inputType : "text"}
      />
    </label>
  );
};
