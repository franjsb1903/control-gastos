import { useEffect, useState } from 'react'

const BudgetControl = ({ expenses, budget }) => {
  const [available, setAvaliable] = useState(0)
  const [spent, setSpent] = useState(0)

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => expense.amount + total,
      0
    )

    setSpent(totalSpent)
    setAvaliable(budget - totalSpent)
  }, [expenses])

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
          <span>Disponible: </span> {formatBudget(available)}
        </p>
        <p>
          <span>Gastado: </span> {formatBudget(spent)}
        </p>
      </div>
    </div>
  )
}

export default BudgetControl
