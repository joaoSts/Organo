
import './CampoTexto.css'


const CampoTexto = (props) => { //props = propiedades que esse componente recebeu
    //let valor = ''



    const aoDigitado = (evento) => {
    
            props.aoAlterado(evento.target.value)
    }
    return (
        <div className="campo-texto">

            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}
export default CampoTexto