import Colaborador from '../Colaborador'
import './time.css'

const Time=(props)=>{
 //   const css={backgroundColor:props.corSecundaria}
 
 
    return(
     // isso é um if no começo
       (props.Colaboradores.length > 0 )?  <section className='time' style={{backgroundColor:props.cor }}> 
          
         
            <h3 style={{borderColor:props.corSecundaria}}>{props.nome}</h3>   
        <div className='colaboradores'>
       { props.Colaboradores.map(item=><Colaborador corDeFundo={props.corSecundaria}
       nome={item.nome}
       cargo={item.cargo}
       imagem={item.imagem}
       key={item.nome}
       />)
       }
       </div>   
           </section>
           :''// if
    )
}

export default Time