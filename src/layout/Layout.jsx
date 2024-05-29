import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
