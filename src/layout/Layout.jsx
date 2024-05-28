import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Routers from "../routes/Routers";
import Testimonials from "../components/Testimonials";
import OurServices from "../components/OurServices";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Testimonials />
      <OurServices />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
