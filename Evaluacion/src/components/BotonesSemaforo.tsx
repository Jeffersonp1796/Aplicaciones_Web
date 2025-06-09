import { useSemaforo } from '../context/SemaforoContext';

const BotonesSemaforo = () => {
  const { cambiarColor, color } = useSemaforo();

  const estiloBoton = (colorBoton: string) => {
    if (color === colorBoton) {
      if (colorBoton === 'rojo') return 'px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700';
      if (colorBoton === 'amarillo') return 'px-4 py-2 rounded bg-yellow-400 text-black hover:bg-yellow-500';
      if (colorBoton === 'verde') return 'px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700';
    }
    return 'px-4 py-2 rounded bg-gray-200 text-black hover:bg-gray-300';
  };

  return (
    <div className="flex justify-center gap-4 mt-6">
      <button onClick={() => cambiarColor('rojo')} className={estiloBoton('rojo')}>
        Luz Roja
      </button>
      <button onClick={() => cambiarColor('amarillo')} className={estiloBoton('amarillo')}>
        Luz Amarilla
      </button>
      <button onClick={() => cambiarColor('verde')} className={estiloBoton('verde')}>
        Luz Verde
      </button>
    </div>
  );
};

export default BotonesSemaforo;
