import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({
    presupuesto
    ,setPresupuesto
    ,isValidPresupuesto
    ,setIsValidPresupuesto
    ,gastos
    ,setGastos}) => {
  return (
    <header>
        <h1>Planificador de Gastos Familia Perez</h1>

        {isValidPresupuesto ? (
            <ControlPresupuesto
            setIsValidPresupuesto={setIsValidPresupuesto}
            gastos={gastos}
            setGastos={setGastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}/>
        ) : (
            <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
        />
        )}
        
    </header>
  )
}

export default Header