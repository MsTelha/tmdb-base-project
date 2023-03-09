
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
function LandPage() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default LandPage;
