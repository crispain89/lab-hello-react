import './App.css';

import Card from './componentes/Card';
import Portada from './componentes/Portada';

const infoPortada = {
  titulo: 'Say hello to Reactjs',
  info:'You will learn how to use the most popular frontend library, and become a super Ninja developer'
}

const infoCards = [

  {
    src:'/icon1.png',
    title: 'Declarative',
    info:'React makes it painless to create interactive Uis'
  },
  {
    src:'/icon2.png',

    title: 'Components',
    info:'Build encapsulated components that manage their satate'
  },
  {
    src:'/icon3.png',
    title: 'Single-Way',
    info:"A set of immutable values are passed to the component's"
  },
  {
    src:'/icon4.png',

    title: 'JSX',
    info:'Statically-typed design to run on modern browsers'
  }
]
  




function App() {



  return (
    <div className="App">

      <Portada titulo={infoPortada.titulo} info={infoPortada.info } />
      <div className='cards'>
      {infoCards.map((card) => { 
        return <Card src={ card.src} title={card.title} info={ card.info} />
      })}
      </div>
    
    </div>
  );
}
export default App;