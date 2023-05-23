import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/index';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';



function App() {
  const times=[
    {
      nome:'Programação',
      cor:'#d9f7e9',
      corSecundaria:'#57c278'

    },
    {
      nome:'Front-End',
      cor:'#E8F8FF',
      corSecundaria:'#82cffa'

    }, {
      nome:'Data-Science',
      cor:'#FOF8E2',
      corSecundaria:'#A6D157'

    }, {
      nome:'Devops',
      cor:'#FDE7E8',
      corSecundaria:'#E06B69'

    }, {
      nome:'Ux e Design',
      cor:'#FAE9F5',
      corSecundaria:'#DB6EBF'

    }, {
      nome:'Mobile',
      cor:'#FFF5D9',
      corSecundaria:'#FFBA05'

    }, {
      nome:'Inovação e Gestão',
      cor:'#FFEEDF',
      corSecundaria:'#FF8A29'

    }

  ]
  const [colaboradores,setColaboradores]= useState([])
 const aoNovaColaboradorAdicionado=(colaborador)=>{
  setColaboradores([...colaboradores,colaborador])
      
 }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time=>time.nome)} 
      aoColaboradorCadastrado={colaborador=>aoNovaColaboradorAdicionado(colaborador)}/>
  {times.map(time=><Time key={time.nome} 
  nome={time.nome} 
  cor={time.cor} 
  Colaboradores={colaboradores.filter(colaborador=>colaborador.time===time.nome)}
  corSecundaria={time.corSecundaria}/>)}  

<Rodape />
    </div> 
    
    );
  
}

export default App;
