import React, {useState, useEffect} from 'react';
import api from './services/api.js'

import './App.css';
import Header from './components/Header';


/**
 * conceitos importantes do react
 * Componente
 * Propriedade - informação que passa do componente pai para o componente filho
 * Estado e imutabilidade 
 */

function App() {

  const [projects, setProjects] = useState([]);

 
  //useState retona um array com duas posições. Na primeira ele retorna a variavel com seu valor inicial. Na segunda uma funcao para atualizar esse valor
  //useEffect eh utilizada para disparar funcoes sempre que tiver alguma informação alterada ou para simplesmente disparar uma funcao quando um componente eh exibida.

  //useEffect(() => {qual funcao}, [quando])
  //[quando] este eh um array de dependencias, se deixar em branco a funcao só sera executada uma vez
  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  async function handleAddproject() { 
    //setProjects([...projects, `Novo Projeto ${Date.now()}`]);

   const response = await api.post('projects', {
        title: `Novo Projeto ${Date.now()}`,
        owner: "Pedro"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }
  
return (
    <>
      <Header title="Projects"/>	 
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
      <button type="button" onClick={handleAddproject}>Adicionar projeto</button>
    </>
  )
}

export default App;