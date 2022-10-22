const BudgetControl = ({ budget }) => {
  const formatBudget = amount => {
    return amount.toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR',
    })
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Gráfica aquí</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatBudget(budget)}
        </p>
        <p>
          <span>Disponible: </span> {formatBudget(0)}
        </p>
        <p>
          <span>Gastado: </span> {formatBudget(0)}
        </p>
      </div>
    </div>
  )
}

export default BudgetControl
