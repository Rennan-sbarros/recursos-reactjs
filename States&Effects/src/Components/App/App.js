import './App.css';
import Counter from '../Counter-SemHooks/Counter';
import SmartCounter from '../Counter-ComHooks/SmartCounter';
import IfoodCounter from '../IfoodCounter/IfoodCounter';

function App() {
  return (
    <>
      <h1>Sem Hooks</h1>
      <Counter />

      <h1>Com Hoooks</h1>
      <SmartCounter />

      <h1>Componente Funcional - Ifood/</h1>
      <IfoodCounter />
    </>
  );
}

export default App;
