import Expense from './Expense'

const ExpensesList = ({ expenses, setExpenseToEdit, deleteExpense }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2 className="gastos">
        {expenses.length ? 'Gastos' : 'Aún no tienes gastos'}
      </h2>
      {expenses.map(expense => (
        <Expense
          expense={expense}
          key={expense.id}
          setExpenseToEdit={setExpenseToEdit}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  )
}

export default ExpensesList
