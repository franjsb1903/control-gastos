import { useState } from 'react'
import { BudgetModel } from '../models/Budget'
import Message from './Message'
import CloseBtn from '../img/cerrar.svg'
import { Categories } from '../models/Categories'

const Modal = ({ setModal, saveExpense, expenseToEdit, setExpenseToEdit }) => {
  const [message, setMessage] = useState('')

  const [budget, setBudget] = useState(expenseToEdit ?? BudgetModel)

  const closeModal = () => {
    setModal(false)
    setExpenseToEdit({})
  }

  const clearForm = () => {
    setBudget(BudgetModel)
  }

  const onChangeInput = e => {
    const { value, name } = e.target

    setBudget({
      ...budget,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if ([budget.name, budget.category, budget.amount].includes('')) {
      setMessage('Todos los campos son obligatorios')
      return
    }

    setMessage('')
    saveExpense(budget)
    clearForm()
    closeModal()
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="Close Modal" onClick={closeModal} />
      </div>
      <form onSubmit={handleSubmit} className={'formulario'}>
        <legend>{expenseToEdit.name ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
        {message && <Message type={'error'}>{message}</Message>}
        <div className="campo">
          <label htmlFor="name">Nombre Gasto</label>
          <input
            type="text"
            placeholder="Añade el Nombre del Gasto"
            id="name"
            name="name"
            value={budget.name}
            onChange={onChangeInput}
          />
        </div>
        <div className="campo">
          <label htmlFor="amount">Cantidad</label>
          <input
            type="number"
            placeholder="Añade la cantidad del gasto: ej. 300"
            id="amount"
            name="amount"
            value={budget.amount}
            onChange={e =>
              setBudget({ ...budget, amount: Number(e.target.value) })
            }
          />
        </div>
        <div className="campo">
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            value={budget.category}
            name="category"
            onChange={onChangeInput}
          >
            <option value="">-- Seleccione --</option>
            {Object.keys(Categories).map(key => (
              <option value={key} key={key}>
                {Categories[key].name}
              </option>
            ))}
          </select>
        </div>

        <input
          type="submit"
          value={expenseToEdit.name ? 'Guardar Cambios' : 'Nuevo Gasto'}
        />
      </form>
    </div>
  )
}

export default Modal
