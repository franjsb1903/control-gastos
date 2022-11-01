import {
  LeadingActions,
  TrailingActions,
  SwipeAction,
} from 'react-swipeable-list'

export const leadingActions = (expense, setExpenseToEdit) => (
  <LeadingActions>
    <SwipeAction onClick={() => setExpenseToEdit(expense)}>Editar</SwipeAction>
  </LeadingActions>
)

export const trailingActions = (id, deleteExpense) => (
  <TrailingActions>
    <SwipeAction onClick={() => deleteExpense(id)} destructive={true}>
      Eliminar
    </SwipeAction>
  </TrailingActions>
)
