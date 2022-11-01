import BudgetControl from './BudgetControl'
import NewBudget from './NewBudget'

const Header = ({
  expenses,
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  resetApp,
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValidBudget ? (
        <BudgetControl
          expenses={expenses}
          budget={budget}
          resetApp={resetApp}
        />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          isValidBudget={isValidBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  )
}

export default Header
