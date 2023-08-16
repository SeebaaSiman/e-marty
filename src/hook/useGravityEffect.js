import { useRef, useEffect } from 'react';
//*Funciona escuchando los eventos de movimiento del mouse (mousemove) y los eventos táctiles (touchmove) en el elemento, calculando y aplicando una transformación al elemento en función de la posición del cursor o del toque
export const useGravityEffect = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const btn = buttonRef.current;

    const handleMove = (e) => {
      const rect = btn.getBoundingClientRect(); //obtener dimensiones y posición del elemento
      const h = rect.width / 2; // calcula el punto central del elemento (h altura)

      let clientX, clientY; // obtener coordenas de mouse o touch del cursor

      if (e.type === 'mousemove') {
        clientX = e.clientX;
        clientY = e.clientY;
      } else if (e.type === 'touchmove') {
        const touch = e.touches[0];
        clientX = touch.clientX;
        clientY = touch.clientY;
      }
      //Calcula la diferencia entre la posición del cursor (o toque) y el centro del elemento en el eje
      const x = clientX - rect.left - h;
      const y = clientY - rect.top - h;
      //Calcula las distancias desde el centro del elemento al cursor (o toque) tanto en coordenadas cartesianas como polares
      const r1 = Math.sqrt(x * x + y * y); //coordenadas cartesianas


      const factor = 2; //* Ajusta este factor para que el efecto ocurra desde una mayor distancia

      const r2 = (1 - r1 / h) * r1 * factor; // coordenadas polares
      const angle = Math.atan2(y, x); //Calcular el ángulo polar entre el centro del elemento y el cursor (o toque)
      //Calcula las transformaciones en las coordenadas X (tx) y Y (ty) basadas en el ángulo y la distancia r2
      const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
      const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;

      btn.style.transform = `translate(${tx}px, ${ty}px)`; //Aplica las transformaciones
    };

    const handleLeave = () => {
      btn.style.transform = 'translate(0px, 0px)'; //resetea las transformaciones
    };

    btn.addEventListener('mousemove', handleMove);
    btn.addEventListener('touchmove', handleMove);
    btn.addEventListener('mouseleave', handleLeave);
    btn.addEventListener('touchend', handleLeave);

    return () => {
      btn.removeEventListener('mousemove', handleMove);
      btn.removeEventListener('touchmove', handleMove);
      btn.removeEventListener('mouseleave', handleLeave);
      btn.removeEventListener('touchend', handleLeave);
    };
  }, []);

  return buttonRef;
};

//*  const buttonRef = useGravityEffect(); PASARLO COMO REF AL BUTTON
