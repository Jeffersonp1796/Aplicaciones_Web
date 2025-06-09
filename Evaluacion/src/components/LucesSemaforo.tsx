import { useSemaforo } from '../context/SemaforoContext';

const LucesSemaforo = () => {
  const { color } = useSemaforo();

  const estilo = (c: string) =>
    `w-20 h-20 rounded-full mx-auto transition-opacity duration-300 ${
      color === c ? 'opacity-100' : 'opacity-30'
    }`;

  return (
    <>
      <div className="flex flex-col items-center gap-4 bg-gray-900 p-6 rounded-xl">
        <div className={`${estilo('rojo')} bg-red-600`} />
        <div className={`${estilo('amarillo')} bg-yellow-400`} />
        <div className={`${estilo('verde')} bg-green-500`} />
      </div>
    </>
  );
};

export default LucesSemaforo;
