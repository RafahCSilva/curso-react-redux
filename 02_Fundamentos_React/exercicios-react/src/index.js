import React from 'react';
import ReactDom from 'react-dom';
import Hook from './componentes/Hook';
// import PrimeiroComponente from './componentes/PrimeiroComponente';
// import A, {CompB as B} from './componentes/SegundoComponente';
// import MultiElementos from './componentes/MultiElementos';
// import Familia from './componentes/Familia';
// import Membro from './componentes/Membro';
// import ComponenteComFuncao from './componentes/ComponenteComFuncao';
// import Pai from './componentes/Pai';
// import ComponenteClasse from './componentes/ComponenteClasse';
// import Contador from './componentes/Contador';

const elemento = document.getElementById('root');

// Passando o texto para ReactDom
// ReactDom.render('Ola React', elemento);

// Para usar JSX, importe o 'react'
// ReactDom.render(<h1>Ola React</h1>, elemento);

// Estruturas complexas, ao inves de usar JS puro, com appendChild
// ReactDom.render(<ul>
//   <li>Pedro</li>
//   <li>Maria</li>
//   <li>Ana</li>
// </ul>, elemento);

// Armazenando numa variavel
// const jsx = <ul>
//   <li>Pedro</li>
//   <li>Maria</li>
//   <li>Ana</li>
// </ul>;
// ReactDom.render(jsx, elemento);

// Usando um Componente
ReactDom.render(
  <div>
    {/*<PrimeiroComponente
          valor="Bom dia"
          aBcD={123}
          outro={2 ** 2}
      />*/}

    {/*<A valor="Olá eu so o A"/>*/}
    {/*<B valor="B na area"/>*/}
    {/*<B valor="B na area"/>/!* Com Alias *!/*/}

    {/*<MultiElementos/>*/}

    {/*<FamiliaSilva />*/}

    {/*<Familia sobrenome="Pereiraaaaa">
      <Membro nome="Andre"/>
      <Membro nome="Mariana" sobrenome="Pereira"/>
    </Familia>*/}

    {/*<ComponenteComFuncao />*/}

    {/*<Pai />*/}

    {/*<ComponenteClasse valor={'Sou um componente Classe!'} />*/}


    {/*<Contador numeroInicial={10}/>*/}

    <Hook/>

  </div>
  , elemento);
