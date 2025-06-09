const ParteTeorica = () => {
  return (
    <>
      <div className="bg-white p-4 rounded shadow mt-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Parte Teórica</h2>
        <ul className="list-disc pl-4 space-y-2">
          <li><strong>¿Qué hace el hook useState? Dé un ejemplo.</strong> Permite manejar el estado en componentes. Ejemplo: <code>const [count, setCount] = useState(0)</code></li>
          <li><strong>¿Qué es un fragmento (<> </>) y para qué sirve?(&lt;&gt;&lt;/&gt;):</strong> Sirve para agrupar elementos sin agregar un div innecesario.</li>
          <li><strong>¿Qué diferencia hay entre useContext y useState?</strong> useState es local; useContext permite compartir estado global entre componentes.</li>
          <li><strong>¿Cuál es la estructura básica de un componente funcional?</strong> Es una función que retorna JSX. Ej:
            <pre>{`prueba = () => (<div>Hola Jeff</div>)`}</pre>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ParteTeorica;