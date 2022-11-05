import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import ExpensesList from './components/expenses/ExpensesList'
import Modal from './components/Modal'
import { generateId } from './helpers'
import IconNewBudget from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(
    localStorage.getItem('budget') ? Number(localStorage.getItem('budget')) : ''
  )
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)

  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses')
      ? JSON.parse(localStorage.getItem('expenses'))
      : []
  )

  const [expenseToEdit, setExpenseToEdit] = useState({})

  const [filter, setFilter] = useState('')
  const [expensesFiltered, setExpensesFiltered] = useState([])

  useEffect(() => {
    if (Object.keys(expenseToEdit).length > 0) {
      handleNewBudget(false)
    }
  }, [expenseToEdit])

  useEffect(() => {
    console.log({ budget })
    localStorage.setItem('budget', budget)
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  }, [expenses])

  useEffect(() => {
    if (filter) {
      setExpensesFiltered(
        expenses.filter(expense => expense.category === filter)
      )
      return
    }
    setExpensesFiltered(expenses)
  }, [filter])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0
    setIsValidBudget(budgetLS > 0)
  }, [])

  const handleNewBudget = (resetExpenseToEdit = true) => {
    setModal(true)
    if (resetExpenseToEdit) setExpenseToEdit({})
  }

  const saveExpense = expense => {
    setFilter('')
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
  }

  const deleteExpense = id => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }

  const resetApp = () => {
    setExpenses([])
    setExpensesFiltered([])
    setBudget('')
    setIsValidBudget(false)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        resetApp={resetApp}
      />

      {isValidBudget && (
        <>
          <main>
            <Filters filter={filter} setFilter={setFilter} />
            <ExpensesList
              expenses={expenses}
              setExpenseToEdit={setExpenseToEdit}
              deleteExpense={deleteExpense}
              filter={filter}
              expensesFiltered={expensesFiltered}
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
          saveExpense={saveExpense}
          expenseToEdit={expenseToEdit}
          setExpenseToEdit={setExpenseToEdit}
        />
      )}
    </div>
  )
}

export default App
