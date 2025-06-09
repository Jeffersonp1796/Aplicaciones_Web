import { createContext, useContext, useState, ReactNode } from 'react';

type Color = 'rojo' | 'amarillo' | 'verde';

interface SemaforoContextType {
  color: Color;
  cambiarColor: (nuevoColor: Color) => void;
}

const SemaforoContext = createContext<SemaforoContextType | undefined>(undefined);

export const SemaforoProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState<Color>('rojo');

  const cambiarColor = (nuevoColor: Color) => {
    setColor(nuevoColor);
  };

  return (
    <SemaforoContext.Provider value={{ color, cambiarColor }}>
      {children}
    </SemaforoContext.Provider>
  );
};

export const useSemaforo = () => {
  const context = useContext(SemaforoContext);
  if (!context) throw new Error('useSemaforo debe usarse dentro de SemaforoProvider');
  return context;
};
