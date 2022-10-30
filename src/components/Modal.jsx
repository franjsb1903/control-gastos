import { useState } from 'react'
import Message from './Message'
import CloseBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animateModal, setAnimateModal, saveExpense }) => {
  const [message, setMessage] = useState('')

  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')

  const closeModal = () => {
    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const clearForm = () => {
    setName('')
    setAmount('')
    setCategory('')
  }

  const handleSubmit = e => {
    e.preventDefault()

    if ([name, category, amount].includes('')) {
      setMessage('Todos los campos son obligatorios')
      return
    }

    setMessage('')
    saveExpense({
      name,
      amount,
      category,
    })
    clearForm()
    closeModal()
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CloseBtn} alt="Close Modal" onClick={closeModal} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}
      >
        <legend>Nuevo Gasto</legend>
        {message && <Message type={'error'}>{message}</Message>}
        <div className="campo">
          <label htmlFor="name">Nombre Gasto</label>
          <input
            type="text"
            placeholder="Añade el Nombre del Gasto"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="amount">Cantidad</label>
          <input
            type="number"
            placeholder="Añade la cantidad del gasto: ej. 300"
            id="amount"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="saving">Ahorro</option>
            <option value="food">Comida</option>
            <option value="house">Casa</option>
            <option value="various">Gastos Varios</option>
            <option value="leisure">Ocio</option>
            <option value="health">Salud</option>
            <option value="subscriptions">Subcripciones</option>
          </select>
        </div>

        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  )
}

export default Modal
