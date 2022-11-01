import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ({ expenses, budget, resetApp }) => {
  const [available, setAvaliable] = useState(0)
  const [spent, setSpent] = useState(0)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => expense.amount + total,
      0
    )

    setSpent(totalSpent)
    setAvaliable(budget - totalSpent)
    setTimeout(() => {
      setPercentage(((totalSpent / budget) * 100).toFixed(2))
    }, 500)
  }, [expenses])

  const formatBudget = amount => {
    return amount.toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR',
    })
  }

  const handleResetApp = () => {
    const response = confirm('¿Deseas reiniciar presupuesto y gastos?')

    if (response) {
      resetApp()
    }
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
            trailColor: '#F5F5F5',
            textColor: percentage > 100 ? '#DC2626' : '#3B82F6',
          })}
          text={`${percentage}% Gastado`}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear App
        </button>
        <p>
          <span>Presupuesto: </span> {formatBudget(budget)}
        </p>
        <p className={`${available < 0 ? 'negativo' : ''}`}>
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
