import { useState } from 'react'
import { ExpenseModel } from '../models/Expense'
import Message from './Message'
import CloseBtn from '../img/cerrar.svg'
import { Categories } from '../models/Categories'

const Modal = ({ setModal, saveExpense, expenseToEdit, setExpenseToEdit }) => {
  const [message, setMessage] = useState('')

  const [expense, setExpense] = useState(expenseToEdit ?? ExpenseModel)

  const closeModal = () => {
    setModal(false)
    setExpenseToEdit({})
  }

  const clearForm = () => {
    setExpense(ExpenseModel)
  }

  const onChangeInput = e => {
    const { value, name } = e.target

    setExpense({
      ...expense,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if ([expense.name, expense.category, expense.amount].includes('')) {
      setMessage('Todos los campos son obligatorios')
      return
    }

    setMessage('')
    saveExpense(expense)
    clearForm()
    closeModal()
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={CloseBtn}
          alt="Close Modal"
          height={'25px'}
          onClick={closeModal}
        />
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
            value={expense.name}
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
            value={expense.amount}
            onChange={e =>
              setExpense({ ...expense, amount: Number(e.target.value) })
            }
          />
        </div>
        <div className="campo">
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            value={expense.category}
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
