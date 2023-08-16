import { useEffect, useState } from 'react';

const useIntersectionObserver = (ref, options = {}) => {
    const [isIntersecting, setIntersecting] = useState(false);
    //*
    useEffect(() => {
        Promise.resolve(
            typeof IntersectionObserver !== "undefined" ? IntersectionObserver : import("intersection-observer")
        )
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
            } else {
                setIntersecting(false);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref, options]);

    return isIntersecting;
};

export default useIntersectionObserver;

//! Instalar intersection-observer para que funcione
// yarn add intersection-observer

//* Las opciones predeterminadas para el objeto options del IntersectionObserver son:
// root: null, lo que significa que el viewport se utiliza como el elemento raíz para la detección de intersección.
// rootMargin: "0px 0px 0px 0px", lo que significa que no se agrega ningún margen adicional al rectángulo del viewport. distance
// threshold: 0, lo que significa que la intersección se registra cuando el elemento de destino se vuelve completamente visible en el viewport.

// Para usarlo, importarlo asignarle un nombre y pasarle las opciones y la ref creada
// const ref = useRef();
// const options = {
//     threshold: 0.5,
//   };
// const isIntersecting = useIntersectionObserver(ref, options);
