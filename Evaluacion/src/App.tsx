import { SemaforoProvider } from './context/SemaforoContext';
import LucesSemaforo from './components/LucesSemaforo';
import BotonesSemaforo from './components/BotonesSemaforo';
import ParteTeorica from './components/ParteTeorica';

function App() {
  return (
    <SemaforoProvider>
      <>
        <h1 className="text-3xl font-bold text-center my-6">Simulador de Semáforo</h1>
        <div className="flex flex-col items-center gap-4">
          <LucesSemaforo />
          <BotonesSemaforo />
        </div>
        <ParteTeorica />
      </>
    </SemaforoProvider>
  );
}

export default App;