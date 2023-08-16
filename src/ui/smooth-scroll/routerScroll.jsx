import { createContext, useEffect, useState } from 'react'
import { $ } from '../utils'
const DEFAULT_SCROLL = 0

export const RouterScrollContext = createContext()

export function RouterScrollProvider({ children }) {
  const currentPathName = window.location.pathname.slice(1) //se utiliza para obtener la porción de la URL después del nombre de dominio, sin /
  const [currentPath, setCurrentPath] = useState(currentPathName)

  useEffect(() => {
    const $elementToScroll = $('#elementToScroll') //fx que busca un elemento que coincida con el ID
    const $elementTarget = $(`#${currentPath}`)
    const offsetLeft = $elementTarget?.offsetLeft

    $elementToScroll.scrollTo({
      top: 0,
      left: offsetLeft || DEFAULT_SCROLL,
      behavior: 'smooth'
    })
  }, [currentPath])

  const handleCurrentPath = (path) => {
    setCurrentPath(path)
  }

  return (
    <RouterScrollContext.Provider
      value={{
        handleCurrentPath,
        currentPath
      }}
    >
      {children}
    </RouterScrollContext.Provider>
  )
}
