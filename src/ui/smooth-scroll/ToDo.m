//\* Animación desplazamiento horizontal al hacer click en un header
-Creación

-implementación
css html scroll-behavior: smooth;
  <div className={styles.editorialBg} /> // este será el fondo fixed
        <Header /> //filterProducts MIO // 
        <main className={styles.main} id="elementToScroll">
          <FiltersProvider>
            <Explore />
          </FiltersProvider>
          <UserLists />
        </main>
------------------------------------------------------
.editorialBg {
  position: fixed;
  inset: 0;
  background-image: url(/editorial-bg.webp);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(0.7);
}
----------------
*Header

export const NAVIGATION_PATHS = {
  HOME: '',
  LISTS: 'listas'
}

  const { currentPath } = useRouterScroll()  // traigo del contexto
  const selectedIfIsPath = (path) => path === currentPath ? 'selected' : false // fx para className

        <ul>
          <li>
            <Link // componente creado que maneja ...
              targetId={NAVIGATION_PATHS.HOME} // Prop que recibe el componente Link, que es el path que cree arriba en un objeto
              className={`linknav ${selectedIfIsPath(NAVIGATION_PATHS.HOME)}`} // cambia los estilos por medio de la fx
            >
              Explorar  // este link lleva al componente <Explorer/>
            </Link>
          </li>
          <li>
            <Link
              targetId={NAVIGATION_PATHS.LISTS}
              className={`linknav ${selectedIfIsPath(NAVIGATION_PATHS.LISTS)}`}
            >
              Mis listas // <UserLists />
            </Link>
          </li>
        </ul>

.header {
  padding: 0 1rem;
  position: fixed; // lo más importante despues UI
  width: 100%;
  height: 8rem;
  display: flex;
  z-index: 100;
}

.nav {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.nav ul {
  display: flex;
  gap: 3rem;
}
---------------------------------------------------------
*En un main poner el id "elementToScroll" (probar con useId de react)

.main {
height: 100vh;
min-height: 50rem;
display: grid;
grid-template-columns: 100% 100%;
position: relative;
overflow-x: hidden;
padding: 8rem 1rem;
}

@media (min-width: 1361px) {
.main {
grid-template-columns: 100% 50%;
}
}
-------------------------------------------------
























//\* Arrastrar entre una lista y otra

//\* al hacer hover un punto se estiliza en una linea horizontal, al estar seleccionado queda estirado (header)

//\* Filtro por rangos

//\* en una grilla de img al hacer click animación para ir a un costado y ponerse en grande
