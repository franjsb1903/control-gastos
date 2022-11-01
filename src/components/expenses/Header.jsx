const Header = ({ length, textData, textNoData }) => (
  <h2 className="gastos">{length ? textData : textNoData}</h2>
)

export default Header
