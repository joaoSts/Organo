import './Botao.css'

const Botao=(props)=>{
    return(
        <button className='Botao'>
            {props.texto}
        </button>
    )
}
export default Botao