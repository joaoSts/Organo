import './rodape.css'


const Rodape =()=>{

        return(
            <section className='rodapeComponente'>
                <div>
            <ul className='imagens'>
              <li> <a href='https://facebook.com' target='_blank'><img src="/imagem/fb.png" alt="logo do facebook"/></a></li> 
              <li> <a href='https://twitter.com' target='_blank'><img src="/imagem/tw.png" alt="logo do twitter"/></a></li> 
              <li><a href='https://instagram.com' target='_blank'><img src="/imagem/ig.png" alt="logo do instagram"/></a></li> 
            
             </ul>
             
               <img className='logo' src="/imagem/logo.png" alt="logo da Organo"/> 
              <p>Desenvolvido por João Mendonça</p>
            
            
                </div>
            </section>
        )


}

export default Rodape