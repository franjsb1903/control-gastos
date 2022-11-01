import Expense from '../expense/Expense'
import Header from './Header'

const ListAll = ({ expenses, setExpenseToEdit, deleteExpense }) => {
  return (
    <>
      <Header
        length={expenses.length}
        textData={'Gastos'}
        textNoData={'Sin gastos'}
      />
      {expenses.map(expense => (
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

export default ListAll
