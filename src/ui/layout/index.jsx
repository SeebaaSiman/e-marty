import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { usePageVisibility } from "@/hook/usePageVisibility";
export const Layout = () => {
  usePageVisibility("¡No te vayas! ¡Vuelve!");
  return (
    <LayoutPageContainer>
      <LayoutNavBar>
        <NavBar />
      </LayoutNavBar>
      <Outlet />
      <Footer />
    </LayoutPageContainer>
  );
};
const LayoutPageContainer = styled.div`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const LayoutNavBar = styled.nav`
  /* position: sticky; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  z-index: 300;
`;

//*efecto con css al hacer scroll
