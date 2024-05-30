import Footer from "../Components/Footer/Footer.jsx";
import Nav from "../Components/Navbar/Nav.jsx"

import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <>
      <Nav/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};
