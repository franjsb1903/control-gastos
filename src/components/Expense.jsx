import { formatDate } from '../helpers'

import IconAhorro from '../img/icono_ahorro.svg'
import IconCasa from '../img/icono_casa.svg'
import IconComida from '../img/icono_comida.svg'
import IconGastos from '../img/icono_gastos.svg'
import IconOcio from '../img/icono_ocio.svg'
import IconSalud from '../img/icono_salud.svg'
import IconSuscripciones from '../img/icono_suscripciones.svg'

const dictIcons = {
  saving: IconAhorro,
  food: IconComida,
  house: IconCasa,
  various: IconGastos,
  leisure: IconOcio,
  health: IconSalud,
  subscriptions: IconSuscripciones,
}

const Expense = ({ expense }) => {
  const { category, name, amount, date, id } = expense
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={dictIcons[category]} alt="Expense Icon" />
        <div className="descripcion-gasto">
          <p className="categoria">{category}</p>
          <p className="nombre-gasto">{name}</p>
          <p className="fecha-gasto">
            Añadido el: <span>{formatDate(date)}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto">{amount}€</p>
    </div>
  )
}

export default Expense
