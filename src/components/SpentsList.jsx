import Spent from './Spent'

const SpentsList = ({ spents }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2 className="gastos">
        {spents.length ? 'Gastos' : 'Aún no tienes gastos'}
      </h2>
      {spents.map(spent => (
        <Spent spent={spent} key={spent.id} />
      ))}
    </div>
  )
}

export default SpentsList
