import { useState, useEffect } from 'react'
import Header from './components/Header'
import ExpensesList from './components/ExpensesList'
import Modal from './components/Modal'
import { generateId } from './helpers'
import IconNewBudget from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const [expenses, setExpenses] = useState([])

  const [expenseToEdit, setExpenseToEdit] = useState({})

  useEffect(() => {
    if (Object.keys(expenseToEdit).length > 0) {
      handleNewBudget(false)
    }
  }, [expenseToEdit])

  const handleNewBudget = (resetExpenseToEdit = true) => {
    setModal(true)
    if (resetExpenseToEdit) setExpenseToEdit({})
    setTimeout(() => {
      setAnimateModal(true)
    }, 500)
  }

  const saveExpense = expense => {
    if (expense.id) {
      const expensesUpdated = expenses.map(expenseState =>
        expenseState.id === expense.id ? expense : expenseState
      )
      setExpenses(expensesUpdated)
      setExpenseToEdit({})
      return
    }
    expense.id = generateId()
    expense.date = Date.now()
    setExpenses([...expenses, expense])
    // TODO: VER LO DE CERRAR EL MODAL
  }

  const deleteExpense = id => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <ExpensesList
              expenses={expenses}
              setExpenseToEdit={setExpenseToEdit}
              deleteExpense={deleteExpense}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconNewBudget}
              alt="Icon New Budget"
              onClick={handleNewBudget}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animateModal={animateModal}
          setAnimateModal={setAnimateModal}
          saveExpense={saveExpense}
          expenseToEdit={expenseToEdit}
          setExpenseToEdit={setExpenseToEdit}
        />
      )}
    </div>
  )
}

export default App
