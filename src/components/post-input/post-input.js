export const PostInput = ({children, htmlFor, inputId, type, inputStyle})=> {
  return <label className="post-label" htmlFor={htmlFor}>{children}
    <input className="post-input" style={inputStyle} id={inputId} type={type} />
  </label>
}