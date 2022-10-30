import Expense from './Expense'

const ExpensesList = ({ expenses }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2 className="gastos">
        {expenses.length ? 'Gastos' : 'Aún no tienes gastos'}
      </h2>
      {expenses.map(expense => (
        <Expense expense={expense} key={expense.id} />
      ))}
    </div>
  )
}

export default ExpensesList
