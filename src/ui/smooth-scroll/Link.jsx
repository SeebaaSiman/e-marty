import { useRouterScroll } from "../hooks/useRouterScroll";

export function Link({ target, targetId, ...props }) {
  const { handleCurrentPath } = useRouterScroll();

  const handleClick = (e) => {
    const { altKey, ctrlKey, shiftKey, metaKey } = e; // si en el evento de onClick se está presionando algunas de esas teclas, se considerea un evento diferente

    const isDifferentEvent = altKey || ctrlKey || shiftKey || metaKey;
    const isManageableEvent = !target || target === "_self";

    if (!isDifferentEvent && isManageableEvent) {
      // si no se presionaron esas teclas y el target es "_self"
      e.preventDefault(); // previene el comportamiento predeterminado del enlace
      handleCurrentPath(targetId); // fx desde el contexto que manda el targetId (vienen del objeto NAVIGATION_PATHS)
    }
  };
  return <a href={targetId} onClick={handleClick} target={target} {...props} />;
}
