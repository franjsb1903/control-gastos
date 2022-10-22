import { useState } from 'react'
import Header from './components/Header'
import SpentsList from './components/SpentsList'
import Modal from './components/Modal'
import { generateId } from './helpers'
import IconNewBudget from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const [spents, setSpents] = useState([])

  const handleNewBudget = () => {
    setModal(true)
    setTimeout(() => {
      setAnimateModal(true)
    }, 500)
  }

  const saveSpent = spent => {
    spent.id = generateId()
    spent.date = Date.now()
    setSpents([...spents, spent])
  }

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <main>
            <SpentsList spents={spents} />
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
          saveSpent={saveSpent}
        />
      )}
    </div>
  )
}

export default App
