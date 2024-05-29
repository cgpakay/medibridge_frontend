import faqImg from "../../assets/images/faq-img.png";
import FaqList from "./FaqList";

const Faq = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row">
            {" "}
            {/* Responsive flex direction */}
            <div className="w-full md:w-1/2 order-1 md:order-none">
              {" "}
              {/* Responsive ordering */}
              <img src={faqImg} alt="FAQ illustration" />
            </div>
            <div className="w-full md:w-1/2 px-4 py-8 order-none md:order-1">
              {" "}
              {/* Responsive padding and ordering */}
              <h2 className="heading">Most frequently asked questions</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
