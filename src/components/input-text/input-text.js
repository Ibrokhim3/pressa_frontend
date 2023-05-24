export const InputText = ({ inputType, htmlFor, style }) => {
  return (
    <label style={style} className="post-form-label" htmlFor={htmlFor}>
      <input
        id={htmlFor}
        className="input-text"
        type={inputType ? inputType : "text"}
      />
    </label>
  );
};
