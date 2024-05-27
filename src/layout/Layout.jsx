import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Routers from "../routes/Routers";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
