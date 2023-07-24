import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>{gastosFiltrados.length ? "Gastos" : "No hay gastos"}</h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              eliminarGasto={eliminarGasto}
              setGastoEditar={setGastoEditar}
              key={gasto.id}
              gasto={gasto}
            />
          ))}
        </>
      ) : (
        <>
        <h2>{gastos.length ? "Gastos" : "No hay gastos en la categoria"}</h2>
          {gastos.map((gasto) => (
          <Gasto
            eliminarGasto={eliminarGasto}
            setGastoEditar={setGastoEditar}
            key={gasto.id}
            gasto={gasto}
          />
          ))}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;
