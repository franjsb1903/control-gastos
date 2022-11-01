const Message = ({ children, type }) => (
  <div className={`alerta ${type}`}>{children}</div>
)

export default Message
