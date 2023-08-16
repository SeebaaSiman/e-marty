import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../ui/layout";
import { Home, Buy } from "../pages";
import { ProductDetail } from "../pages/Home/Products/ProductDetail";
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Buy" element={<Buy />} />
      </Route>
      <Route path="/product/:title" element={<ProductDetail />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
{
  /* <Route path="/" element={<LayoutHome />} errorElement={<NotFound />}>
  <Route path=":id" element={<ProductDetail />} />
</Route>
<Route path="Buy" element={<Buy />} /> */
}

//*Router journal app
// export const AppRouter = () => {
//   const status = useCheckAuth();
//   if (status === "checking") {
//     return <Loader />;
//   }

//   return (
//     <Routes>
//       {/* Condicionar que aparezcan rutas según estoy autenticado o no */}
//       {status === "authenticated" ? (
//         <Route path="/*" element={<JournalRoutes />} />
//       ) : (
//         <Route path="/auth/*" element={<AuthRoutes />} />
//       )}
//       <Route path="/*" element={<Navigate to="/auth/login" />} />
//     </Routes>
//   );
// };
//*JournalROutes
// export const JournalRoutes = () => {
//   return (
//     <Routes>
//         <Route path="/" element={ <JournalPage /> } />

//         <Route path="/*" element={ <Navigate to="/" /> } />
//     </Routes>
//   )
// }
