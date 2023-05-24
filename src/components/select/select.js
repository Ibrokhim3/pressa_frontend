export const Select = ({ children, id }) => {
  return (
    <div className="select-wrapper">
      <select className="select" name="" id={id}>
        {children}
      </select>
    </div>
  );
};
