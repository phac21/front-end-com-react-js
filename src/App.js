import React, {useState} from 'react';
import Header from './components/Header';

import './App.css';
import backgroundImage from './assets/wallpaper.png'

/**
 * conceitos importantes do react
 * Componente
 * Propriedade - informação que passa do componente pai para o componente filho
 * Estado e imutabilidade 
 */

function App() {

  const [projects, setProjets] = useState(['Desenvolvimento de app', 'Front-end web']);

  //useState retona um array com duas posições. Na primeira ele retorna a variavel com seu valor inicial. Na segunda uma funcao para atualizar esse valor

  function handleAddproject() {
    //projects.push(`Novo Projeto ${Date.now()}`);
    
    setProjets([... projects, `Novo Projeto ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects"/>	 
      <img width={300} src={backgroundImage}/> 
      <ul>
        {projects.map(project => <li key={project} >{project}</li>)}
      </ul>
      <button type="button" onClick={handleAddproject}>Adicionar Projeto</button>
    </>
  )
}

export default App;