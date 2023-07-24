import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
  presupuesto,
  gastos,
  setGastos,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [porcentaje, setPorcentaje] = useState(0);
  const [disponible, setDesponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.cantidad + total,
      0
    );
    const totalDisponible = presupuesto - totalGastado;

    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setDesponible(totalDisponible);
    setGastado(totalGastado);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1300);
  }, [gastos]);

  const formatNumber = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
    const res = confirm("Deseas reiniciar ?");

    if (res) {
      setGastos([]);
      setPresupuesto(0);
      setIsValidPresupuesto(false);
    }
  };
  //Dist folder added
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "#DC2626" : "#3B83F6",
            trailColor: "#F5F5F5",
            textcolor: porcentaje > 100 ? "#DC2626" : "#3B83F6",
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        ></CircularProgressbar>
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear App
        </button>
        <p>
          <span>Presupuesto: </span> {formatNumber(presupuesto)}
        </p>

        <p className={`${disponible < 0 ? "negativo" : ""}`}>
          <span>Disponible: </span> {formatNumber(disponible)}
        </p>

        <p>
          <span>Gastado: </span> {formatNumber(gastado)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
