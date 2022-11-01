import { SwipeableList, SwipeableListItem } from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { formatDate } from '../../helpers'
import { Categories } from '../../models/Categories'
import { leadingActions, trailingActions } from './swipActions'

const Expense = ({ expense, setExpenseToEdit, deleteExpense }) => {
  const { category, name, amount, date, id } = expense

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions(expense, setExpenseToEdit)}
        trailingActions={trailingActions(id, deleteExpense)}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={Categories[category].icon} alt="Expense Icon" />
            <div className="descripcion-gasto">
              <p className="categoria">{Categories[category].name}</p>
              <p className="nombre-gasto">{name}</p>
              <p className="fecha-gasto">
                Añadido el: <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">{amount}€</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense
