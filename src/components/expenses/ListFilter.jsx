import Expense from '../expense/Expense'
import Header from './Header'

const ListFilter = ({ expensesFiltered, setExpenseToEdit, deleteExpense }) => {
  return (
    <>
      <Header
        length={expensesFiltered.length}
        textData={'Gastos'}
        textNoData={'No tienes gastos de este tipo'}
      />
      {expensesFiltered.map(expense => (
        <Expense
          expense={expense}
          key={expense.id}
          setExpenseToEdit={setExpenseToEdit}
          deleteExpense={deleteExpense}
        />
      ))}
    </>
  )
}

export default ListFilter
