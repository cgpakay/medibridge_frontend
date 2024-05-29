import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Routers from "../routes/Routers";
import Faq from "../components/Faq/Faq";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Header />
      <main>
        <Routers />
      </main>
      <Faq />
      <Footer />
    </>
  );
};

export default Layout;
