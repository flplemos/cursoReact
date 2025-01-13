//Componente Pai
import './App.css'

//importar componente filho
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropsExample from './components/PropsExample';

function App() {

  return (
    <>
      <h1>Hello World React</h1>
      {/* Utilizando o componente importado no JSX */}
      <FunctionalComponent/>
      <ClassComponent/>
      <PropsExample nome="Felipe" idade={27}/>
    </>
  );
}

export default App
