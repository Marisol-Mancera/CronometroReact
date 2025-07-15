import React, { useState, useEffect } from 'react';

function Cronometro() {
  // --- ESTADOS ---
  // Solo necesitamos estos dos para que todo funcione.
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // --- EFECTO PARA CONTROLAR EL TIEMPO ---
  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setSeconds(segundosPrevios => segundosPrevios + 1);
      }, 1000);
    }

    // La función de limpieza que se ejecuta cuando 'isActive' cambia.
    return () => {
      clearInterval(intervalId);
    };
  }, [isActive]); // El efecto solo depende de si está activo o no.

  const toggleTimer = () => {
    setIsActive(!isActive); // Cambia el estado de isActive.
  };

  const resetTimer = () => {
    setSeconds(0); // Reinicia los segundos a 0.
  };
  // --- VISTA (LO QUE SE MUESTRA) ---
  return (
    <div>
      <h1>Cronómetro</h1>
      <p>Segundos: {seconds}</p>
      <button onClick={toggleTimer}>Pausa/Reanudar</button>
      <button onClick={resetTimer}>Reiniciar</button>
    </div>
  );
}

export default Cronometro;