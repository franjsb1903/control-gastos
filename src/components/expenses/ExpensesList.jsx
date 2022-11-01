import ListAll from './ListAll'
import ListFilter from './ListFilter'

const ExpensesList = ({
  expenses,
  setExpenseToEdit,
  deleteExpense,
  filter,
  expensesFiltered,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filter ? (
        <ListFilter
          expensesFiltered={expensesFiltered}
          setExpenseToEdit={setExpenseToEdit}
          deleteExpense={deleteExpense}
        />
      ) : (
        <ListAll
          expenses={expenses}
          deleteExpense={deleteExpense}
          setExpenseToEdit={setExpenseToEdit}
        />
      )}
    </div>
  )
}

export default ExpensesList
