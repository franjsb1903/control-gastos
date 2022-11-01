import { Categories } from '../models/Categories'

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label>Filtrar Gastos</label>
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="">-- Todas las categorías --</option>
            {Object.keys(Categories).map(key => (
              <option value={key} key={key}>
                {Categories[key].name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filters
